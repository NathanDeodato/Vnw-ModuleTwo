/*

Date: 25/01/2022
Class: English

1 - Criar uma função que imprima na tela os 4 últimos filmes lançado nos cinemas Brasileiros.
2 - Criar uma condição que verifique se o filme é dos Vingadores e mostrar uma mensagem
3 - Criar uma contagem de 0 à 18 de 3 em 3
4 - 

*/

// Start Code!

// 1
function moviesList(filmes){
    for(let indice = 0 ; indice < filmes.length ; indice++){
        console.log(`${indice+1}° - ${filmes[indice]}`)
    }
}

let movies = ["King's Man - A origem", 
            "Roda do destino", 
            "U311 - Guerra em alto mar",
            "Aonde quer que você vá", 
            "My Hero Academia - Missão mundial de heróis"]

moviesList(movies)

// Divisor

console.log("----------")

// 2

let movie = "Avengers"

if(movie == "Avengers") {
    console.log("Perfeito! O filme que você está assistindo é dos vingadores.")
} else {
    console.log("Desculpe, mas o filme que você está assistindo não é dos vingadores.")
}

// Divisor

console.log("----------")

// 3

for(let count = 0 ; count < 18 ; count += 3) {
    console.log(`${count}`)
}

// 4

let movieSala = 3
let enterSala = 2

if(movieSala == enterSala) {
    console.log("Correto! Você está na sala certa.")
} else {
    console.log("Incorreto! Você está na sala errada.")
}
