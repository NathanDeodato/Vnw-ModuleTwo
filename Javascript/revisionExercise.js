/*
Date: 28/01/2022
class: Lógica - Revision

1 - Crie uma condição que exiba uma mensagem no console se estiver a noite, senão retorne no console que ainda não anoiteceu

2 - Crie uma condição que exiba uma mensagem no console se você for comer lasanha E o molho for bolonhesa

3 - Criar uma condição que exiba uma mensagem no console se você estiver de férias OU estiver Sol

4 - Criar um loop que conte de 1 até 20 usando o FOR que conte os números ímpares

5 - Criar um loop que conte de 20 até 1 usando o WHILE que conte os números pares

6 - Crie uma função que receba comida como (parâmetro) e exiba no console

7 - crie uma função que receba um personagem, uma cidade, e uma fruta (parâmetros) e exiba no console

8- Utilize um método para adicionar dois games ao fim do array

9 - Utilize um método para remover o o último jogo dentro do array.

10 - Utilize um método para organizar os jogos em ordem alfabética

*/

// Start Code!

// 1

let nigth = "Noite"
if(nigth === "Noite") {
    console.log("Tudo ok! Está de noite.")
} else {
    console.log("Infelizmente ainda não anoiteceu.")
}

// Divisor
console.log("-------")

// 2

let prato = "Lasanha"
let sabor = "Bolonhesa"
if(comer === "Lasanha" && sabor === "bolonhesa") {
    console.log("Tudo certo! Você está comendo seu pratos requisita.")
} else {
    console.log("Infelizmente você não está comendo seu prato requisitado.")
}

// Divisor
console.log("-------")

// 3

let feriasOrSun = "Sol"
if(feriasOrSun === "Sol" || "Férias") {
    console.log("Seu dia cumpre um dos requisitos necessário.")
} else {
    console.log("Infelizmente seu dia não cumpre nenhum dos requisitos, mas em algum momento cumprirá, confia!")
}

// Divisor
console.log("-------")

// 4

for(let num = 1 ; num < 20 ; num ++) {
    if(num % 2 != 0) {
        console.log(num)
    }
}

// Divisor
console.log("-------")

// 5

let num = 20
while(num > 1) {
    if(num % 2 === 0) {
        console.log(num)
    }
    num --
}

// Divisor
console.log("-------")

// 6

function Food(comida) {
    console.log(comida)
}

Food("Estrogonofe")

// Divisor
console.log("-------")

// 7

function persoCityFruit(personagem, cidade, fruta) {
    console.log(personagem)
    console.log(cidade)
    console.log(fruta)
}

persoCityFruit("Luffy", "Rio de Janeiro", "Uva")

// 8

let games = ['zelda', 'gta', 'mario', 'sonic mania', 'god of war', 'the witcher']

games.push("League of Legens")
games.push("Valorant")

console.log(games)

// 9

games.pop()
console.log(games)

// 10

games.sort()
console.log(games)

// 11/12/13

let pessoas = [
    {
        Nome: "Mokey D. Luffy",
        Idade: 19,
        Altura: 1.70,
        Musica: ["Brooks Song", "Deixe-me ir", "Dizeres"],
    },
    {
        Nome: "Roronoa Zoro",
        Idade: 20,
        Altura: 1.75,
        Musica: ["le bon rhum de binks", "Quando eu te ligar", "Não tem mais nós dois"],
    },
    {
        Nome: "Nico Robin",
        Idade: 23,
        Altura: 1.68,
        Musica: ["luffy's island song", "Poesia acustica Paris", "Rubi"],
    }
]

for(let index = 0 ; index <= 3; index ++) {
    console.log(`${index+1}° Música - ${pessoas[index].Musica[0]}`)
}

