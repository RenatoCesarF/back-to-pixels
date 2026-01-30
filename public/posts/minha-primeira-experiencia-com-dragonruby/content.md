---
title: "Minha experiência com DragonRuby"
date: "01/30/2026"
author: "renato"
cover_image: "cover"
excerpt: "Comecei a usar DragonRuby no fim do ano passado e gostaria de comentar sobre como tem sido minha experiência com esse framework"
categories: [game-dev, programming, dragon-ruby]
---

Quando iniciei na programação meu principal interesse era desenvolvimento de jogos. Mas esse nunca foi fácil, sempre limitado por ferramentas, algumas pagas, outras tão complicadas em suas funcionalidades que se tornavam inacessíveis. Mas ao longo dos anos essa situação tem mudado, com o lançamento de ferramentas gratuitas, acessíveis, e com o aumento de tutoriais na rede.

Mesmo com essa maior acessibilidade, ao longo dos últimos anos, nunca consegui escolher e permanecer em uma ferramenta, sempre tinha algo faltando, ou sobrando. Até nos meus anos mais produtivos usando Godot, a forma como certas partes funcionavam me confundiam, me atrasavam e amedrontavam com suas documentações complicadas e falta de tutoriais.

Depois, focando mais em frameworks em puro código, esses também nunca me satisfizeram, ou me deram o entusiasmo necessário pra cair de cabeça, estudar e realmente construir algo. Ou bati em uma parece que não sabia como escalar, como [naquele post] . Mas depois de muitas tentativas, e minha última antes de voltar pro Godot, acredito que encontrei algo que realmente me contenta e satisfaz com desenvolvimento de jogos.

Dito isso, gostaria de compartilhar um pouco da minha primeira experiência com Ruby e DragonRuby, minhas primeiras impressões sobre a linguagem, a engine, a comunidade e meu primeiro projeto por aqui.

## Ruby

Pra mim Ruby sempre foi o colega mais estranho e menos popular do Python, e depois de tantos anos programando em Python, Ruby começou a se tornar uma opção cada vez mais interessante. Depois de ouvir um pouco sobre a história do DHH e do Ruby on Rails (antes de todas as polêmicas recentes), Ruby se tornou uma pequena paixonite pra mim. Aquele conhecido distante que pensamos sobre nos dias mais atoa.

Em seguida li alguns capítulos de [Poingnant Guide to Ruby](https://www.amazon.com/Whys-Poignant-Guide-Lucky-Stiff/dp/1838039503), fiz alguns experimentos com Rails decidi dar uma olhada naquele framework Ruby, que apesar de ser pago, tinha opção para estudantes.

Alguns e-mail depois, eu estava com uma nova e poderosa ferramenta em mãos, mas eu não esperava que me daria tão bem com ela.

## DragonRuby

Primeiro, todo e qualquer projeto que começa com uma filosofia, você pode ter certeza que algo grande esta sendo construído. Assim como Ruby tem toda sua filosofia do porque as coisas são como são, DragonRuby segue o mesmo princípio e expande as ideias por trás de sua linguagem interna, trazendo todo um ideal de software e comunidade com o objetivo de ser sustentável e sobre pessoas (e eu sou uma pessoa). A todos que lerem esse texto, recomendo ler a página sobre [A Filosofia de DragonRuby](https://docs.dragonruby.org/#/misc/philosophy). Mas o ponto principal pra mim é:

> We will prioritize the removal of pain. The aesthetics of Ruby make it such a joy to work with, and we want to capture that within the engine.

E também:

> There is a programming idiom in software called “The Pit of Success”. The term normalizes upfront pain as a necessity/requirement in the hopes that the investment will yield dividends “when you become successful” or “when the code becomes more complicated”. This approach to development is strongly discouraged by us. It leads to over-architected and unnecessary code; creates barriers to rapid prototyping and shipping a game; and overwhelms beginners who are new to the engine or programming in general.

Olhando em retrospecto para minha jornada frustrada com desenvolvimento de jogos, acredito que esses (e outros aspectos) da filosofia de DragonRuby meus principais impedimentos em produzir algo.

### E daí?

Tendo em vista essa filosofia, o framework corta diversas etapas chatas e trabalhosas e transforma tudo em algo simples: arrays. Arrays por toda parte (acesso global incentivado), e por baixo dos panos tudo acontece.

> Acompanhando vários devs ao longo dos anos, vejo que todos eles convergem pra esse mesmo tipo de implementação: tenha um objeto gigante e genérico pra controlar o estado de tudo e passe ele por todo o seu jogo de forma a evitar passar argumento por argumento de um lugar pro outro

Todos esses arrays estão dentro de um objeto global chamado `args`, dentro dele temos:

- State: um objeto genérico onde injetamos todo o estado do jogo, como : `args.state.life = 0`
- Outputs: um array de outputs, incluindo audio, sprites, formas geográficas, textos e etc
- Inputs: um objeto que guarda e registra eventos de entrada, como teclado, mouse, etc.
- Events: Eventos extras que podem ocorrer com o dispositivo ou a janela, como mudança de orientação, tamanho da janela, etc.

E com isso, se constrói praticamente qualquer coisa (até onde eu explorei). Existem também diversos helpers pra auxiliar no desenvolvimento, como Grid, Layout, Easing etc. Além de centenas de exemplos de implementações de funcionalidades comuns em jogos dentro da documentação que você pode usar como exemplo. Não tem como pedir por mais.

Por fim, temos a comunidade do Discord, apesar de ser meio confuso o uso de cada canal (pelo menos pra mim), a comunidade é bem ativa, de tempos em tempos gosto de checar o _show-and-tell_ pra ver o que tem sido feito com a ferramenta, e até o próprio criador compartilha alguns projetos dele ali.

### Meus destaques pessoais

Toda a graça de DragonRuby é não ter que se preocupar com nada, nada mesmo. Você só faz o jogo, coloca as coisas no array e segue em frente, já é otimizado o bastante pra você poder fazer muita coisa errada até isso se tornar um problema (não me ocorreu ainda). Todos os conflitos são evitados, e o dinamismo de Ruby torna tudo possível e melhor de se trabalhar.

> It just works

Toda a experiência de desenvolvimento é fluida, sem impedimentos, sem configuração, sem dor de cabeça. Se tive uma ideia pro jogo eu crio um array, interajo com as entidades que preciso através da variável global e jogo na tela da forma mais simples. Depois, se for necessário, posso transformar os itens do array em uma classe, organizar em funções e abstrair apenas o necessário.

Em nenhum momento tenho que parar pra ler documentação, são apenas algoritmos, iteração e lógica básica, simplesmente incrível. Para prototipação nem se fala.

Talvez futuramente as coisas se tornem confusas de mais pra serem encontradas e entendidas, mas acredito que, se isso acontecer, será totalmente culpa minha por falta de organização própria. Espero escrever sobre isso em breve, pois meu projeto esta começando a tropeçar em si mesmo. Cabe ai aquele estudo sobre _patterns_ que estou devendo a alguns anos.

> Um extra sobre as funções agregadas de formatação de texto e lidar com números, tudo fica muito mais confortável, e olha que não conheço nem metade desses métodos ainda.

## Limitações

Meu único problema é com o LSP de Ruby, atualmente estou usando SolarGraph com RoboCup, mas ele não consegue dar conta do trabalho. Algo sempre esta quebrado, atualmente não posso minimizar uma função e salvar o arquivo, que ele maximiza de novo; os importes mesmo sendo encontrados recebem um aviso de "não encontrado"; a substituição global troca tudo incorretamente, não sabendo diferenciar entre objeto, hash, variável e o nome que eu pretendia mudar mesmo;

Por último, o _grep_, como toda a documentação é embutida no framework, sempre que faço um _grep_ ele me traz resultados de todos os exemplos da documentação, preciso achar uma forma de limitar essa busca a arquivos do meu jogo apenas.

Mas note, nenhum desses problemas tem a ver com o DragonRuby, mas sim com meu ambiente de desenvolvimento.

## Meus Experimentos

Falando um pouco sobre meus experimentos no framework: estou tendo diversas ideias de jogos nos últimos meses, então prototipar no DragonRuby (o forte do framework) foi o que mais fiz. Primeiro fiz apenas um controle de câmera com zoom, nada de mais; Depois comecei um protótipo de um jogo de barco que eu tinha imaginado. Segui com esse protótipo por aproximadamente 1 mês. Mas como é um estilo de jogo que eu não entendo muito, estava ficando sem ideias e o desenvolvimento se complicou um pouco, acabei deixando o projeto de lado. Decidi aprender a fazer jogo recriando algumas funcionalidades de um dos meus jogos favoritos: [Nuclear Throne](https://store.steampowered.com/app/242680/Nuclear_Throne/).

E foi assim que caí na espiral do projeto pequeno que se torna um projeto grande, o medo e destino de todo desenvolvedor de jogos iniciante. Sim, ja passei por isso diversas vezes no passado, com diversos projetos diferentes, mas dessa vez foi curioso. Eu comecei definindo que não iria me perder trabalhando em coisas fora do escopo de funcionalidade, ou seja, nada de melhoria visual, nada de efeitos que demoram horas pra chegar no ponto certo, nada de se perder em algo que não importa pra um projeto simples.

Semanas depois e eu estou planejando qual o próximo game juice devo adicionar no jogo. E a sina se repete.

Eu estava planejando eventualmente fazer conteúdo sobre desenvolvimento de jogo, mais pro fim do ano. Mas acabei começando a fazer algumas lives desenvolvendo esse projeto, e daí comecei a fazer alguns clips e jogar em algumas plataformas. Parei com as lives pois estava sendo super estressante e demandando muita energia. Decidi fazer apenas 1 vídeo, pois estava muito animado. Depois de publicado esse video acabei gostando do engajamento que estava recebendo no TikTok, decidi continuar fazendo alguns vídeos por semana documentando o processo.

Apesar de odiar o formato, por ser muito limitado, acabei vendo a plataforma como uma forma de divulgar o jogo se eventualmente fosse virar um projeto real. Então decidi transformar esse projetinho no meu primeiro lançamento, mas coloquei uma data limite: tenho que lança-lo esse ano. Independente do que ele se tornar, ele é meu primeiro jogo e tem que ser lançado em 1 ano. Não é uma ideia nova, então não promete nada, mas quero ter um sandbox onde posso adicionar qualquer mecânica que acho interessante em um jogo num estilo que acho interessante. Sempre quis ter um projeto pra brincar assim, e acho que é num top-down-shooter que me encontrei.

## Conclusão

De qualquer forma, espero continuar postando meus vídeos sobre o desenvolvimento desse jogo tanto no [TikTok](https://www.tiktok.com/@renatogamedev) quanto no [Youtube](https://www.youtube.com/@vodsrenatogamedev). Vou tentar documentar um pouco do processo aqui também, entrando em mais detalhes, planos e ideias. Tem muito o que fazer e trabalhar nos próximos meses.

Sobre DragonRuby, acho que é a minha ferramenta de escolha pra próximos projetos, apesar das limitações de não ter shaders e outros tipos de manipulação de imagem e sprites. Escolho esse framework pois me possibilita sentar e adicionar algo no jogo em 1 hora. Me sinto produtivo, me sinto fluindo com as ideias. Recomendo a todo interessado experimentar.

Espero trazer Atualizações sobre o jogo aqui em breve, comentar um pouco sobre os planos e o processo. Até mais!
