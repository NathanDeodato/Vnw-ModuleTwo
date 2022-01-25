/*

Date: 19/01/2022

Requisitos do exercício

1 - crie uma função que exiba uma mensagem no console

2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

3 - crie uma função que receba seu nome, idade, e estilo musical preferido (parâmetros) e exiba no console

4 - crie uma função que receba o seu filme favorito, musica favorita (parâmetros) e exiba no console

Exercícios bônus

5 - crie uma função que retorne o triplo do número recebido no parâmetro da função

*/

// Start Code!

// 1
function mensage(){
    console.log("Hello World!")
}
mensage()

// Divisor

console.log("----------")

// 2
function namePrint(nome){
    console.log(`${nome} é um aluno do VNW`)
}
namePrint("Nathan")

// Divisor

console.log("----------")

// 3
function sobreMe(nome, idade, musicStyle){
    console.log(`Nome - ${nome}`)
    console.log(`Idade - ${idade}`)
    console.log(`Estilo musical - ${musicStyle}`)
}
sobreMe("Nathan", 16, "Love Song and Rap")

// Divisor

console.log("----------")

// Mensage

let $mensage = "São muitos, mas vou fazer menções honrosas"
console.log($mensage)

// Divisor

console.log("----------")

// 4
function movieAndMusic(movie, music){
    console.log(`Filme favorito - ${movie}`)
    console.log(`Música favorita - ${music}`)
}

let $movie = ["Shaft", "Em ritmo de Fuga", "Pantera Negra", "Vingadores(TODOS)", "Velozes e Furiosos(TODOS)"]
let $music = ["Deixe-me ir", "Zódiaco - Xamã", "Rap Motivacional - Baki", "Dizeres", "Nova Colonia - Orochi"]

movieAndMusic($movie, $music)

// Divisor

console.log("----------")

// 5
function numCalc(num){
    let calc = num * 3
    console.log(`${num} x 3 = ${calc}`)
}

let num = 12
numCalc(num)

