# React JS
* 02/02/2022
* 2° Módulo

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

### Importando documento .css
~~~jsx
    import "./App.css"
~~~