---
title: 'Sofrendo de Skill-issues em um desafio em Lua'
date: '04/13/2024'
author: 'renato'
cover_image: 'cover'
excerpt: "Todos os problemas que tive tentando solucionar um desafio usando uma linguagem que não conheço"
categories: [PROGRAMMING, CHALLANGE]
code_theme: 'dracula'
---
Num fim de tarde qualquer, buscando programar algo, como é de minha natureza, decidi me aventurar em um desafio do [Advent of Code](https://adventofcode.com/), um site clássico repleto de problemas de lógica e programação.

Com vontade de experimentar uma nova linguagem, decidi começar com o [Zig](https://ziglang.org/). Após algumas pesquisas no Google, e cerca de vinte linhas de código, tudo que consegui produzir foi um modesto **5** (o arquivo txt que deveria ser aberto não começava com 5). Admito que são Skill-Issues da minha parte; se tentasse novamente, provavelmente conseguiria  (pelo menos abrir o arquivo).

Minha segunda tentativa foi com [Lua](https://www.lua.org/). Já havia brincado um pouco com `tables` e até fiz um círculo seguir meu mouse no [Love2D](https://love2d.org/), então imaginei que tinha experiência suficiente para abrir um arquivo e escrever alguns if-statements.

E lá fui eu.

# A Primeira Parte do Desafio
O desafio em questão é o primeiro dia do [Advent of Code 2023](https://adventofcode.com/2023/day/1). Em resumo: temos um arquivo `.txt` com várias linhas, cada uma contendo uma sequência aleatória de caracteres e alguns **números**. O objetivo é concatenar o primeiro e o último número encontrado em cada linha, somar todas as concatenações e obter o resultado final.

A solução é bastante simples: percorrer cada linha, salvar todos os caracteres que forem inteiros, concatenar o primeiro e o último número da lista e somar ao resultado final.

Por exemplo, dada a linha abaixo, a resposta seria **15**:

```
a1b2c3d4e5f
```

Agora chegamos à segunda parte do desafio, que, embora também simples, me deixou um pouco perdido (ou será que "perdido" não é bem a palavra certa? Skill-issues).

# A Segunda Parte do Desafio
A segunda parte do desafio adiciona uma nova camada de complexidade: além dos números, agora também encontramos números escritos por extenso (não na forma numérica, mas textual), o que nos apresenta outro desafio, mas um que ainda pode ser enfrentado facilmente.

Para resolver isso, percorremos cada linha, buscamos os números e suas representações escritas (`one`, `two`, `three` e assim por diante), e os armazenamos em um HashMap (no final tudo é table) contendo a posição em que foram encontrados e seu valor. Em seguida, ordenamos o HashMap pelas chaves, pegamos a primeira e a última chave e pronto! Temos a resposta somando essas concatenações.

> Claro que existem maneiras mais eficientes de resolver esse problema, mas às vezes é bom tentar resolver o problema primeiro e depois buscar a melhor solução.

Vamos dar uma olhada em como abordei inicialmente essa segunda parte. Para evitar confusão sobre qual parte do código faz o quê, vou começar com o código de filtragem dos números:

```lua
for i = 1, string.len(line) do
  local char = string.sub(line, i, i)
  local inNumber = tonumber(char)
  if (inNumber) then
    currentResult[i] = inNumber
  end
end
```

Também criei uma tabela (seria um HashMap, mas em Lua tudo são tabelas) para facilitar a conversão dos valores:
```lua
NUMBERS_AS_LETTERS = {
  ["one"] = 1,
  ["two"] = 2,
  ["three"] = 3,
  ["four"] = 4,
  ["five"] = 5,
  ["six"] = 6,
  ["seven"] = 7,
  ["eight"] = 8,
  ["nine"] = 9,
};
```

# Continuando com o Post
Eu estava escrevendo este texto quando o NeoVim apagou meu arquivo original, que continha o código em que estava trabalhando, e o substituiu por uma versão antiga do exercício, onde resolvia apenas a primeira parte do problema.

Por isso, comecei a resolver a segunda parte novamente. Então, me deparei com alguns problemas:

- Meu Bubble Sort não estava mais funcionando.
- A seleção de números que mostrei anteriormente também não estava funcionando.

Parecia que dois dias atrás eu era um gênio em Lua, e agora não era mais. Então, refiz os códigos da forma mais simples possível, pois nada funcionava:

```lua
for i = 1, #line do
  local char = string.sub(line, i, i)
  local inNumber = tonumber(char)
  if (inNumber) then
    currentResult[i] = inNumber
    if (i < minFound) then minFound = i end
    if (i > maxFound) then maxFound = i end
  end
end
```


Minha primeira tentativa de identificar os números escritos por extenso foi usando o método `string.find()` durante uma iteração na minha tabela de números escritos (`NUMBERS_AS_LETTERS`):

```lua
  for key, value in pairs(NUMBERS_AS_LETTERS) do
    local allFound = liner.find_all(string.lower(line), key)
    for _, val in ipairs(allFound) do
      if (val) then
        currentResult[val] = value
        if (val < minFound) then minFound = val end
        if (val > maxFound) then maxFound = val end
      end
    end
  end
```

Até aí tudo bem. Usei esse código a seguir para conectar o valor primeiro e último número, converte-lo em inteiro e somando-o ao total:

```lua
local fstring = string.format("%s%s", currentResult[minFound], currentResult[maxFound])
local finalLineNumber = tonumber(fstring)
totalSum = totalSum + finalLineNumber
```

No entanto, uma das linhas do desafio era esta: `6ftv`, onde só há um número. Portanto, temos que lidar com esse tipo de caso específico. Verificamos o tamanho da lista do nosso resultado final e, se ela tiver apenas um elemento, não fazemos a concatenação, usamos apenas esse elemento. [⚠️WARNING⚠️]

# O Problema com `len` e `string.find`
Então, alguns problemas começaram a surgir. Existem duas maneiras de acessar o tamanho de uma tabela: `table.getn(table)` ou `#table`. De acordo com a documentação, ambas são equivalentes. No entanto, quando executei a primeira opção, recebi um erro dizendo que estava tentando executar em uma variável `nil` (que não era  `nil`). Já a segunda não me deu erro, mas retornou o tamanho incorreto da tabela.

Pode-se argumentar que estava usando as tabelas de uma maneira não muito convencional (com números como chaves e como valores também), mas uma função simples como essa deveria funcionar corretamente.

Tentei mover a definição da minha tabela `currentResult` para fora do loop, tentei adicionar múltiplos resets dessa variável para garantir que estava tudo certo, mas nada funcionou.

Aqui está o código em questão e alguns dos meus outputs:

```lua
for line in io.lines("./input.txt") do
  local maxFound = -1
  local minFound = 10000
  -- ----- NUMBERS ----
  for i = 1, string.len(line) do
    local char = string.sub(line, i, i)
    local inNumber = tonumber(char)
    if (inNumber) then
      currentResult[(i)] = inNumber
      if (i < minFound) then minFound = i end
      if (i > maxFound) then maxFound = i end
    end
  end

  -- ----- WORDS ----
  for key, value in pairs(NUMBERS_AS_LETTERS) do
    local indexFound = string.find(line, key)
    if (indexFound) then
      currentResult[(indexFound)] = value
      if (indexFound < minFound) then minFound = indexFound end
      if (indexFound > maxFound) then maxFound = indexFound end
    end
  end

  local fstring = nil
  print("Array length: ", #currentResult)
  print(line)
  for key, value in pairs(currentResult) do
    print(string.format("[%d] : %d", key, value))
  end
  print("First: ", currentResult[minFound], "Last:", currentResult[maxFound])
  print("------")
  currentResult = {}
end
```

Os outputs:

```
Array length:   0
ncqpkzh5twooneoneqfxlqbjjhqsrlkhvdnvtbzpcbj
[9] : 2
[8] : 5
[12] : 1
First:  5       Last:   1
------
Array length:   4
449three45three
[1] : 4
[2] : 4
[3] : 9
[4] : 3
[9] : 4
[10] : 5
First:  4       Last:   5
```

Para ajudar, o `string.find` não reconhece corretamente quando encontra mais de uma ocorrência do termo buscado. Nesta linha: `449three45three`, onde há duas ocorrências de `three`, apenas a primeira é notada, fazendo com que a resposta correta passe despercebida.

Imaginei que poderia existir uma função que resolvesse esse problema de forma mais eficiente, mas preferi fazer manualmente, já que as outras funções internas da linguagem estavam me deixando na mão. Fiz algumas adaptações em um código do Stack Overflow:

```lua 
function find_all(text, pattern, start_index)
  local current_index = start_index or 1
  local occurrences = {}
  while true do
    local found_index, _ = string.find(text, pattern, current_index, true)
    if not found_index then
      break
    end
    table.insert(occurrences, found_index)
    print(found_index)
    current_index = found_index + 1
  end
  return occurrences
end
```

Aproveitei para criar a função mais simples possível para calcular o tamanho de uma tabela, pois já estava cansado desse problema, mas não me renderia a um desafio, apesar de começar a escrever os piores blocos de código da história:

```lua 
function len(arr)
  local i = 0
  for key, value in pairs(arr) do
    i = i + 1
  end
  return i
end
```

Mesmo assim, o resultado estava incorreto, havia algum caso que estava passando despercebido. Após sete tentativas de submissão, decidi ler as dicas gerais. "Escreva testes". Acho que essa é a última ferramenta para entender todos os casos e ver o que está faltando. Então, lá vamos nós.

Como prefiro evitar pacotes, fiz um sistema simples de teste que recebia um nome, uma execução e um resultado esperado. Os testes que fiz:

```lua
print("-- TESTING LEN FUNCTION --")
test("len of list", a.len({ 1, 2, 3, 4, 5 }), 5)
test("len of hash", a.len({ one = 1, two = 2, three = 3, four = 4, five = 5 }), 5)
test("empty list", a.len({}), 0)

print("-- TESTING FIND FUNCTION --")
test("no ocurence", a.find_all("two", "one"), {})
test("single ocurence", a.find_all("one22222", "one"), { 1 })
test("twice ocurence", a.find_all("one22one222", "one"), { 1, 6 })
test("three ocurence", a.find_all("one22one222one", "one"), { 1, 6, 12 })


print("-- TESTING LINE FUNCTION --")
test("nothing", a.runLine("a"), 0)
test("single digit", a.runLine("1a"), 1)
test("single digit", a.runLine("a1a"), 1)
test("double digit", a.runLine("1a1"), 11)
test("double digit other", a.runLine("1a210k"), 10)
test("random location digit other", a.runLine("a2hhhh0k"), 20)
--
test("single word", a.runLine("kkktwokkkk"), 2)
test("double word", a.runLine("kthreekktwokkkk"), 32)
test("double word other", a.runLine("kthreekonektwokkkk"), 32)
test("double word equal", a.runLine("three38484183three"), 33)
--
test("single word single digit", a.runLine("three38484183"), 33)
test("single word single digit", a.runLine("kkkkthree38484183kkk"), 33)
test("single word single digit", a.runLine("7874"), 74)
--
test("Every number", a.runLine("one"), 1)
test("Every number", a.runLine("two"), 2)
test("Every number", a.runLine("three"), 3)
test("Every number", a.runLine("four"), 4)
test("Every number", a.runLine("five"), 5)
test("Every number", a.runLine("six"), 6)
test("Every number", a.runLine("seven"), 7)
test("Every number", a.runLine("eight"), 8)
test("Every number", a.runLine("nine"), 9)


test("dltwonedvpsqv3 = 23", a.runLine("dltwonedvpsqv3"), 23)
test("threesixninesix = 36", a.runLine("threesixninesix"), 36)
test("1zero = 1", a.runLine("1zero"), 1)
```

# Como Sempre, no Fim, Eu Estava Complicando Demais
Escrevi vários casos de teste para garantir que todas as possibilidades estivessem sendo cobertas. Não consegui pensar em mais nada, então recorri ao Reddit do Advent of Code.

Ao ver algumas perguntas, descobri que, nos casos em que só existe um número, a resposta deveria ser esse número repetido duas vezes, em vez de contá-lo apenas uma vez. Esse foi o meu erro. Pensei demais em todos os casos extras, quando só precisava deixar o programa fazer o que deveria fazer.

E o que podemos aprender com isso? Não complicar demais as coisas, deixar a engenharia seguir seu curso e não interferir no processo (evitando o clássico over-engineering).

Nos meus próximos desafios do Advent of Code, tentarei estabelecer um limite máximo de linhas ou de tratamento de casos, focando apenas no que é especificado no desafio e evitando inventar casos extras.

No final, nem aprendi Lua, porque estava obcecado em encontrar a resposta em vez de entender as funcionalidades da linguagem. Mas o fato de o operador de tamanho estar dando errado já me deixa um pouco relutante em usar essa linguagem novamente, apesar de ela ser originária do Brasil.

# Adendos da vida e dos projetos
Duas coisas importantes:

Faz muito tempo que não escrevo nada por aqui. Estive ultra ocupado entrando agora no meu último ano de faculdade (nem acredito). Estive, também, trabalhando em uma consultoria de programação e produtividade saudável, acredito que é uma das minhas melhores criações dos últimos anos. 

Condensando e explicando esses últimos 5 anos de codificação (através desse post parece até que eu comecei ontem, eu sei), 3 anos de trabalho privado e 4 anos de faculdade (obviamente todos esses ocorreram em paralelo).

Espero criar um bom produto, não só apenas com a consultoria (que vai me ajudar a melhorar a forma como explico coisas), mas com os textos de apoio, que de certa forma são ultra-posts de blog. Ainda tenho muito o que trabalhar na consultoria. Se eventualmente os textos somarem 100 páginas, tentarei publica-lo como um livro, mas isso pode levar um bom tempo. De qualquer forma, é um trabalho de iteração, ir adicionando e melhorando os textos e princípios com o tempo.

Segunda coisa: Talvez você tenha notado a mudança repentina na linguagem do site. Sim, estarei escrevendo os próximos posts em português. Apesar do objetivo do site ser um arquivamento do progresso e processo de projetos para aprendizado de todos que poderiam chegar aqui, atualmente na "bolha dev" brasileira temos péssimos conteúdos, muito ruins mesmo. E acho que podemos tentar elevar a barra um pouquinho, de pouco em pouco, pra melhorar a qualidade e competência da comunidade como um todo. 

Estou tentando programar mais (já que dei uma parada nos últimos meses, envolvido com outras coisas), além disso tenho outros projetos que quero começar e documentar por aqui e pelo YouTube também. O que não me falta são ideias. 

Por enquanto vou fazendo alguns desafios aqui e ali enquanto testo algumas linguagens.

Então nos vemos na próxima! 

