/*

Date: 17/01/2022

Requisitos do exercício

1 - Crie um array que receba 5 itens e exiba no console.


2 - Utilize um método para adicionar um nome ao inicio do array.


3 - Utilize um método para remover o último nome do array.


4 - Utilize um método para adicionar dois nomes ao fim do array.


5 - Utilize um método para remover o primeiro nome do array.


6 - Utilize um método para organizar em ordem crescente o seguinte array:
const numbers = [7,5,6,3,8,9,2,1,4]

*/

// Start Code!

// 1

function printArray(hardwareList){
    for(let index = 0 ; index < hardwareList.length ; index ++){
        console.log(`${index+1}° Componente - ${hardwareList[index]}`)
    }
}

let hardware = ["CPU", "GPU", "Mother board", "Memory RAM", "SSD"]
printArray(hardware)

// Divisor

console.log("----------")

// 2

hardware.unshift("NVME M.2")

printArray(hardware)

// Divisor

console.log("----------")

// 3

hardware.pop()

printArray(hardware)

// Divisor

console.log("----------")

// 4

hardware.push("HD")
hardware.push("power supply")

printArray(hardware)

// Divisor

console.log("----------")

//5

hardware.shift()

printArray(hardware)

// Divisor

console.log("----------")

// 6

const numbers = [7,5,6,3,8,9,2,1,4]

numbers.sort()

for(let count = 0 ; count < numbers.length ; count++){
    console.log(`Number - ${numbers[count]}`)
}
