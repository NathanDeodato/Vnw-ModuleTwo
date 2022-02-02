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

//1
if(idade >= 18){
    console.log("Você JÁ responde por seu atos.")
}else{
    console.log("Você NÃO responde por seu atos.")
}

// Divisor

console.log("----------")

// 2
if(idade >= 18 && humano == true){
    console.log("Ok! Você é maior de idade e Humano.")
}

// Divisor

console.log("----------")

// 3
if(birthday == "Janeiro" && "Dezembro"){
    console.log("Parabéns! Muita saúde, paz e sucesso!")
}else {
    console.log("Infelizmente não é seu niver, mas uma hora chega! :)")
}

// Divisor

console.log("----------")

// Script extra!

let nome = "rNathan"
let sobrenome = "Deodato"

// 4
if(nome[0] == "r"){
    console.log("Verificado. Seu nome COMEÇA a letra 'r'")
}else{
    console.log("Verificado. Seu nome NÃO COMEÇA com a letra 'r'")
}

// Divisor

console.log("----------")

// 5
if(sobrenome.length > 6 || nome[0] == "E"){
    console.log("Verificado. Seu nome ATENDE a um dos requisitos necessário.")
}else{
    console.log("Verificado. Seu nome NÃO ATENDE a nenhum dos requisitos necessário.")
}
