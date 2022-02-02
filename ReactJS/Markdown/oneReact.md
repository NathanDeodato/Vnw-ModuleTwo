# React JS
* 31/01/2022
* 2° Módulo

# React JS
    O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.

---

## Criando um app React

### Windows

* Instalando o Node
https://nodejs.org/en/download/

* Verificando versão do Node & npm
~~~powershell
    node --version
~~~

* Criando projeto
~~~powershell
    npx create-react-app nome_do_app
~~~

### Linux

* Instalando o Node
~~~bash
    sudo apt-get install node
~~~

* Verificando versão do Node & npm
~~~bash
    node --v
~~~

* Criando projeto
~~~bash
    npm i create-react-app nome_do_app
~~~

---

## Estrutura básica

### function
~~~jsx
    import React from 'react'
    ​
    function App() {
        return(
        <div>
            <p>Esse é um componente de Função.</p>
        </div>
    )
    } 
    ​
    export default App
~~~

### class

~~~jsx
    import React, { Component } from 'react'
    ​
    class App extends Component {
    ​
    render(){
        return(
        <div>
            <p>Esse é um componente de Class.</p>
        </div>
        )
    }
    }
    ​
    export default App
~~~
