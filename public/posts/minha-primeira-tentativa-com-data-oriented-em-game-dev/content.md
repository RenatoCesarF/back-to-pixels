---
title: "Minha primeira tentativa com Data-Oriented em Game-Dev"
date: "04/08/2025"
author: "renato"
cover_image: "cover"
excerpt: "Relatando minha primeira experiência testando Data-Oriented-Design em um sistema de colisão em Odin "
categories: [odin, game-dev, architecture, programming]
---

A ideia desse texto começou comigo reclamando de alguns problemas (totalmente skill issues) que tive com a linguagem Odin e seus ponteiros e procedimentos, depois, tentando recriar o problema original que tive em uma versão reduzida e apresentável do código, acabei resolvendo o problema. Então o texto se tornou sobre como organizar a solução de forma que ela ficasse mais bem estruturada, com um design de software melhor de trabalhar e de expandir e alterar com o tempo.

Porém, jogos são complexos, e achar essa solução mais limpa, ou até mesmo testar outras soluções já seria um desafio extra. Dessa forma, o texto virou um incentivo pra eu estudar sobre Data-Oriented-Programming (algo que estou adiando a quase 1 ano pra estudar) e _composition_, além de outros _patterns_ que poderiam resolver o problema.

Durante o começo desse estudo, encontrei um dos posts mais interessantes que já vi na internet, onde o autor Eric Leppert trazia um exemplo simples de regra de negócio e tentava fazer essa regra ser obedecida através apenas das definições de OOP do C#.

> Ótima leitura [Wizards and Warriors](https://ericlippert.com/2015/04/27/wizards-and-warriors-part-one/) do Eric Leppert

Diante dessa leitura pensei que talvez, esse post poderia ser apenas uma demonstração, assim como a do Eric, sobre soluções problemáticas para uma regra que, inicialmente, é simples.

---

A verdade é que software design é uma das coisas que mais me encantam, sempre tive discussões intermináveis na minha cabeça sobre como eu implementaria X sistema pra ser escalável e expandível, mas nunca consegui colocar em prática essas discussões. E o Eric coloca de uma forma muito interessante. Claro que no caso dele ele já sabe a solução, e eu ainda não. Mas acho que vai ser uma boa iniciativa pra buscar esses designs melhores e soluções interessantes, além de me direcionar para concretizar as minhas ideias, sistemas e estudos.

Então aqui veremos uma das minhas primeiras tentativas implementando um sistema com uma mentalidade mais voltada para Data-Oriented-Design e Composition, onde eu falho miseravelmente, mostrando o quanto ainda tenho que aprender e melhorar.

Veremos também alguns comentários que tentam refutar as minhas próprias explicações para o que eu acho e fiz quando escrevi aquele código. Acredito que essa abordagem de aprendizado seja boa:

1. você enfrenta um problema;
2. tenta lidar com ele com o que você sabe e se frustra tentando; (este post)
3. estuda sobre possíveis soluções tendo seu problema em mente durante;
4. volta pra solucionar o problema com o conteúdo aprendido; (o próximo post)
5. se frustra de novo.
6. resolve o problema

## O Problema

Estava testando algumas abordagens diferentes do que eu geralmente costumo fazer, testando o que eu entendia sobre _composition_ e _Data-Oriented-Programming_, abordagens que tenho ouvido muito falar no meio do desenvolvimento de jogos, mas que nunca experimentei na prática.

Diante disso comecei um projeto onde tentaria implementar alguns sistemas usando o que eu estava entendendo sobre _composition_.

> Esse exemplo em questão foi desenvolvido em Odin, usando Raylib para renderização

## Estrutura Base

O que temos aqui é um sistema de _Colliders_ e _Entities_, onde a ideia é que entidades tenham _colliders_, porém não como propriedades diretas delas, evitando acoplamento.

> Na verdade essa ideia se originou de um vídeo que eu vi de otimização de memória, que me deixou super interessado em aprender sobre Data-Oriented, porém fui implementar estudos mais aprofundados sobre a teoria. O vídeo: [Intro to Data Oriented Design for Games](https://www.youtube.com/@nicbarkeragain)

A ideia então é ter sistemas, que são _arrays_ de entidades de um mesmo tipo e são responsáveis por gerenciar essas entidades e disponibilizar métodos que agem sobre os dados desse sistema. Aqui temos um `CollisionSystem` que tem uma lista de _Colliders_:

```odin
Collider :: struct {
    position: Vec2,
    radius: f32,
}

CollisionSystem :: struct {
    colliders:  [dynamic]Collider,
}

update_collisions :: proc(sys: ^CollisionSystem) {
	for i in 0 ..< len(sys.colliders) {
		for j in i + 1 ..< len(sys.colliders) {
			a := &sys.colliders[i]
			b := &sys.colliders[j]
			r := a.radius + b.radius
			if distance_squared(a.position, b.position) <= r * r {
				//colided
			}
		}
	}
}

add_collider :: proc(sys: ^CollisionSystem, collider: Collider) -> ^Collider {
	append(&sys.colliders, collider)
    return &sys.colliders[len(sys.colliders) - 1]
}

```

Também temos uma estrutura `Entity` onde guardamos os dados gerais e é o centro do nosso design, suas propriedades podem eventualmente serem convertidas para sistemas à parte quando necessário.

```odin
Entity :: struct {
    name: string,
    position: Vec2,
    collider: ^Collider
    color: rl.Color,
}
```

## A Primeira implementação - O problema do ponteiro

A ideia inicial era que a entidade tivesse um ponteiro para seu _Collider_ de forma que ela pudesse muda-lo quando precisasse, como fazer o _collider_ seguir a posição dela. A primeira implementação ficou mais ou menos assim:

```odin
player_collider := Collider {
	position = player.position,
	radius   = 30,
}

enemy_collider := Collider {
	position = enemy.position,
	radius   = 30,
}

player.collider = add_collider(&collision_system, player_collider)
enemy.collider = add_collider(&collision_system, enemy_collider)

//Durante o update
player.collider.position = player.position
enemy.collider.position = player.position

update_collisions(&collision_system)
```

Esse exemplo funciona bem até adicionarmos mais _colliders_ na lista, quando eventualmente o _garbage collector_ limpa todos os ponteiros existente (ou algo do tipo) e o `player.collider` passa a ser um ponteiro invalido. Então quando ele tenta atualizar seu próprio _collider_, boom!

```
post(46201,0x16bf23000) malloc: Heap corruption detected, free list is damaged a
t 0x600000f8bf90

*** Incorrect guard value: 0
post(46201,0x16bf23000) malloc: *** set a breakpoint in malloc_error_break to de bug
```

Logo, ter um ponteiro na entidade para o seu _collider_ não funciona, pelo menos não dessa forma. Talvez um `raw pointer` seria o correto a se utilizar aqui, mas isso leva a outros problemas e dificuldades também.

## A Solução para os Ponteiros Perdidos

Dessa forma, como não podemos apontar diretamente para o nosso _collider_ temos que achar outra forma de acessar esse _collider_. A solução mais óbvia é armazenar, na entidade, o índice do *collider* correspondente da lista do `CollisionSystem`.

Assim temos uma forma fácil de acessar o elemento em questão que não depende de funcionalidades internas da linguagem que não temos controle. A única desvantagens é se tivermos algum tipo de ordenação na lista, e como isso não existe ainda, não temos com o que se preocupar.

```odin
Entity :: struct {
    name: string,
    position: Vec2,
    color: rl.Color,
    collider_index: int,
}

add_collider :: proc(sys: ^CollisionSystem, collider: Collider) -> int {
	append(&sys.colliders, collider)
	return len(sys.colliders) - 1
}

// cria colliders...

player.collider_index = add_collider(&collision_system, player_collider);
enemy.collider_index  = add_collider(&collision_system, enemy_collider);


// [Durante o update]
// Atualizar posição do collider com base na entidade
collision_system.colliders[player.collider_index].position = player.position;
collision_system.colliders[enemy.collider_index].position = enemy.position;

update_collisions(&collision_system)

```

Essa implementação já resolve o nosso problema de perda de ponteiros, apesar de limitar a nossa capacidade de manusear a lista de _colliders_. Porém, como o sistema de colisão não sabe nada sobre a entidade, não temos como manipular ela durante um callback de `on_collide()` por exemplo. Como poderíamos, por exemplo, empurrar o nosso jogador para trás quando ele encostasse em um inimigo?

O que poderia ser feito é inverter essa lógica: O colisor sabe da entidade, e a entidade é dependente do colisor, mas isso só levaria ao mesmo problema, porém invertido. E é ai que os problemas da minha ignorância sobre esses padrões começam a aparecer mais.

## Quem Aponta para Um, Aponta para Dois

Pedindo uma ajudinha pra IAs Generativas, foi indicado a seguinte solução: a adição de um `raw-pointer` no meu _collider_ que aponta de volta para a entidade.

> Essa solução me da arrepios sempre que penso sobre ela. Mostrando como LLMs podem te direcionar para a pior solução de todas.

```odin
OnCollideProc :: proc(ctx: rawptr, other: ^Collider)

Collider :: struct {
	position: Vec2,
	radius:   f32,
	ctx: rawptr,
	on_collide: OnCollideProc,
}
```

Porém, isso leva a necessidade de alguns _casts_, o que não me parece muito interessante a longo prazo:

```odin
player_collider := Collider {
	position = player.position,
	radius   = 30,
	ctx = rawptr(&player),
	on_collide = proc(ctx: rawptr, other: ^Collider) {
		entity := cast(^Entity)ctx; //cast :(
		entity.color = rl.YELLOW;
		fmt.println("{} colidiu com algo!", entity.name);
	},
}
```

## Isso funciona (?)

Claro, essa solução "funciona", mas nem sempre funcionar é realmente _funcionar_! Fazer um `is_odd` usando a negação da função `is_even` do pacote `is_even` em javascript também funciona, mas não deveria ser aceito como uma solução valida, assim como essa também não deveria.

Outro detalhe: essa solução "funciona" para o player, mas não para os _enemies_, o `on_collide` entre os inimigos simplesmente não funciona, pois estamos nos referindo a uma cópia do inimigo e não ao inimigo mesmo. E transformar a lista de inimigos em uma lista de ponteiros para inimigos não da certo (eu testei).

---

A questão aqui é: o quão granular deve ser a composição de elementos? O certo seria ter um _collider resolver_ que seria responsável por lidar com o resultado das colisões, e este cara saberia da entidade e do colisor? Talvez ninguém deveria saber sobre ninguém e um terceiro deveria cuidar de tudo?

Pesquisando um pouco sobre essa questão vi algumas sugestões de que tudo deveria ser vetores/arrays de _structs_ (inimigos, entidades, posições, acelerações) de forma bem granular, e a entidade deveria guardar o índice para cada um desses componentes. Mas isso ainda não resolver diretamente a influência que a posição da entidade tem no _collider_ vice-e-versa.

Diante disso, decidi parar e estudar as soluções existentes, e buscar algo que fosse simples, funcionasse e fosse de fácil utilização/implementação.

## Conclusão

A verdade é que não vale a pena tentar reinventar a roda sendo que existem soluções que já foram encontradas, debatidas, testadas e utilizadas no mundo real. Se frustrar tentando é só um exercício pra colocar a mão na massa e se interessar e bater de cara com o problema.

Dito isso, vou estudar algumas soluções mais simples que são implementáveis aqui, nada muito distante e complexo como um ECS (Entity-Component-System) por enquanto. Vou tentar trazer algumas dessas soluções pra cá e comentar sobre o que acho delas. Mas me anima imaginar o quão praticas elas podem ser.
