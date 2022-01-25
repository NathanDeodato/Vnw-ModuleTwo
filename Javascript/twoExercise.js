/*
Date: 14/01/2022

Requisitos do exercício

1° Crie uma condição que exiba uma mensagem no console se a idade for maior que 18

2° Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true

3° Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro
*/

/*

Exercícios bônus

4° Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R

5° Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E

*/


// Start Code!

let idade = 20
let humano = true
let birthday = "Maio"


if(idade >= 18 && humano == true){
    console.log("Ok! Você é maior de idade.")
}

if(birthday == "Janeiro" || "Dezembro"){
    console.log("Parabéns! Muita saúde, paz e sucesso!")
}

// Script extra!

let nome = "Nathan"
let sobrenome = "Deodato"

if(nome[0] == "r"){
    console.log("Verificado. Seu nome tem a letra 'r'")
}

if(sobrenome.length > 6 || nome[0] == "E"){
    console.log("Verificado. Seu nome atende a um dos requisitos necessário.")
}
