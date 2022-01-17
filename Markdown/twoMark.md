# Logica - JS
* 14/01/2022
* 2° Módulo

## Operadores de comparação 

* == verificação de valor

    ~~~Javascript
    
        console.log(6 == 6) - true
    
    ~~~

* === verificação de tipo e valor
  
    ~~~Javascript
    
        console.log(6 === "6") - false
    
    ~~~

* != verifica se os valores comparados são diferentes
  
    ~~~Javascript
    
        console.log(3 != 4) - true
    
    ~~~

* !== verifica se o valor e o tipo comparados são diferentes
  
    ~~~Javascript
    
        console.log(9 !== "9") - true
    
    ~~~

* '>' maior que 
  
    ~~~Javascript
    
        console.log(1 > 0) - true
    
    ~~~

* '<' menor que
  
    ~~~Javascript
    
        console.log(2 < -1) - false
    
    ~~~

* '>=' maior ou igual
  
    ~~~Javascript
    
        console.log(5 >= 5) - true
    
    ~~~

* <= menor ou igual

    ~~~Javascript
    
        console.log(8 <= 4) - false
    
    ~~~

## Operadores logicos

* &&
  
    ~~~Javascript
    
        if(name & sobrenome == condição){
            bloco de código
        }
    
    ~~~

* ||
  
    ~~~Javascript
    
        if(name || sobrenome == condição){
            bloco de código
        }
    
    ~~~

* not

    ~~~Javascript
    
        if(name not == "Pâmela"){
            bloco de código
        }
    
    ~~~

## Condicionais

* if
    -
    ~~~Javascript
    
        if(condição){
            bloco de código
        }

    ~~~

* else
    -
    ~~~Javascript
    
        else{
            bloco de código
        }
    
    ~~~

* if else
    -
    ~~~Javascript
    
    
    
    ~~~

## Atividade in class

~~~javascript
    /*Criar uma condição que exiba uma mensagem no console se você
    fizer aniversário em Janeiro OU Dezembro*/

    let niver = "Maio"

    if(niver == "Janeiro" || niver == "Dezembro"){
        console.log("Feliz aniversário! Tudo de bom!")
    }else{
        console.log("Aproveite o ano!")
    }

~~~

