/*

Date: 26/01/2022

Requisitos do exercício

1 - Crie um objeto que receba ao menos três propriedades sobre você.

2 - Adicione uma nova propriedade sem alterar seu objeto inicial.

3 - Remova uma propriedade desse objeto.

4 - Mostre no console todas as propriedades desse objeto.

5 - Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 

6 - Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 

7 - Na propriedade amigos, adicione ao menos 4 itens.

8 - Mostre no console o nome de um amigo de cada lista.
*/

// Start Code!

// 1

let nt = {
        Nome: "Nathan Deodato",
        Idade: 16,
        Hobby: "Codar projetos meus"
    }

// 2

nt.Time = "Flamengo"

// 3

delete nt.Time

// 4

console.log(nt)

// 5

let cadastro = [
    {
        Nome: "Pâmela",
        Idade: 23,
        Telefone: "22 9 6335 5421",
        Amigos: ["Izabel", "Marlon", "Karyne", "Marina", "Luzia"]
    },
    {
        Nome: "Nathan",
        Idade: 16,
        Telefone: "21 9 8089 2990",
        Amigos: ["Mãe", "Pai", "Cleiton", "Gabrielli", "Caio"]
    },
    {
        Nome: "Sandra",
        Idade: 46,
        Telefone: "21 9 5782 3571",
        Amigos: ["Nathan", "Jeane", "Luiz", "Ana Lucia", "Welinton"]
    },
    {
        Nome: "Cassio",
        Idade: 56,
        Telefone: "21 9 9853 1253",
        Amigos: ["Keli", "Nathan", "Cleiton", "Douglas", "Carolina"]
    },
    {
        Nome: "Caio",
        Idade: 17,
        Telefone: "21 9 8441 7525",
        Amigos: ["Mãe", "Pai", "Nathan", "Leticia", "Pablo"]
    }
]

// 7
for(let objectFriend = 0 ; objectFriend <= 4 ; objectFriend ++){
    console.log(cadastro[objectFriend].Amigos[0])
}
