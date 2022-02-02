/*

Date: 17/01/2022

Requisitos do exercício

1 - Criar um loop que conte de 1 até 10 usando FOR


2 - Criar um loop que conte de 10 até 1 usando WHILE


3 - Criar um loop que conte todos os números ímpares de 1 até 100

4- Criar um loop que conte todos os números pares de 0 a 100

*/

// Start Code!

// 1 
for(let numberCount = 1 ; numberCount < 11; numberCount++){
    console.log(numberCount)
}

// 2
let numberCount = 10
while(numberCount > 1){
    numberCount --
    console.log(numberCount)
}


// 3
let $numberCount = 1
while($numberCount < 100){
    if($numberCount % 2 != 0){
        console.log($numberCount)
    }

    $numberCount ++
}

// 4
let numberCount$ = 0
while(numberCount$ < 101){
    if(numberCount$ % 2 == 0){
        console.log(numberCount$)
    }

    numberCount$ ++

}

