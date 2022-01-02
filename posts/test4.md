---
title: 'Titulo do Post'
date: '01/01/2022'
author: 'Renato'
excerpt: 'Descrição do que sera dito no post'
cover_image: '/images/test.gif'
categories: []
---

# Reescrita de Operadores
Algumas operações básicas podem ser reescritas para substituir os já existentes. 	

Existem outros Tipos de *Overloading* com outras interações da linguagem, outros exemplos de *overloading* podem ser encontrados em [[Magic Methods]]

> Ao reescrever um methodo que utiliza dois parametros (como `self`, e o outro operador) usa-se `other` para representar o outro argumento que sera operado em conjunto


Operator | Expression |  Internally
----| -----| ----
Adição| `p1 + p2` | `__add__`
Subtração | `p1 - p2` | `__sub__`
Multiplicação | `p1 * p2` | `__mul__`
Potencia | `p1 ** p2`| `__pow__`
Divisão | `p1 / p2` | `__truediv__`
Floor Division | `p1 // p2` | `__floordiv__` 
Modulo | `p1 % p2` | `__mod__`
True / False | `!p1 [or] if(p1)` | `__bool__`
Bitwise Left Shift | `p1 << p2` | `__lshift__`
Bitwise Right Shift | `p1 >> p2` | `__rshift__`
Bitwise AND | `p1 & p2` | `__and__`
Bitwise OR | `p1 (or) p2` [^1] | `__or__`
Bitwise XOR | `p1 ^ p2` | `__xor__`
Bitwise NOT | `~p1` | `__invert__`



É possível reescrever outros tipos de operadores, como:

Operator| Expression| Internally
---- | ----- | ----
Menor que | `p1 < p2`| `__lt__`
Menor ou igual| `p1 <= p2`| `__le__`
Igual| `p1 == p2`| `__eq__`
Não igual| `p1 != p2`| `__ne__`
Maior que| `p1 > p2`| `__gt__`
Maior ou igual| `p1 >= p2`| `__ge__`
Gerar Hash | `hash(p1)`| `__hash__` 

--- 

[^1]:  (or) significa `||` em linguagens de programação, porem aqui não foi possível representa-lo pois a criação da tabela usa o mesmo simbulo. 