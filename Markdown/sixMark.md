# Logica - JS
* 26/01/2022
* 2° Módulo


## Objetos

    - É uma lista que contem uma propriedade com um valor.

### Sintax

~~~Javascript

    const objeto = {
        propriedad: valor;
        propriedad: valor;
        propriedad: valor;
        propriedad: valor;
    }

~~~

~~~Javascript

    const me = {
        Nome: "Nathan",
        Sobrenome: "Deodato",
        Idade: 16,
        Nascimento: "06/05/2005"
    }

~~~

### Funcionalidades em um objeto

* Adicionar

~~~Javascript

    const me = {
        Nome: "Nathan",
        Sobrenome: "Deodato",
        Idade: 16,
        Nascimento: "06/05/2005"
    }

    me.Time = "Flamengo"

~~~

* Remover

~~~Javascript

    const me = {
        Nome: "Nathan",
        Sobrenome: "Deodato",
        Idade: 16,
        Nascimento: "06/05/2005"
    }

    delete me.Time

~~~

## Atividade in class

~~~Javascript

    /*
    1 - Crie um objeto que receba ao menos três propriedades sobre você.

    2 - Adicione uma nova propriedade sem alterar seu objeto inicial.

    3 - Remova uma propriedade desse objeto.

    4 - Mostre no console todas as propriedades desse objeto.
    */

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

~~~
