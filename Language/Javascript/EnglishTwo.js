/*
Date: 01/02/2022
Class: English

1 - Criar um lógica que verifique se o indivíduo é um bruxo e se ele recebeu uma carta de hogwarts
2 - Criar um array com 2 objetos contendo: Nome, Sobrenome e Personalidade. Sendo 2 amigos do Harry Potter

*/

// Start Code!

// 1

let muggleorWitcher = true
let letterHogwarts = true

if(muggleorWitcher === true && letterHogwarts === true) {
    console.log("Tudo certo! Você irá para hogwarts, parabéns!")
} else {
    console.log("Lamento, mas você não irá para hogwarts.")
}

// 2

let friendsHarry = [
    {
        Name: "Hermione",
        Surname: "Granger",
        Personality: "intelligent"
    },
    {
        Name: "Ronald",
        Surname: "Weasley",
        Personality: "fearful",
    }
]
