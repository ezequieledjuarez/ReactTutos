import React, { Component } from 'react'

class ComponentDidMount extends Component{
    constructor (props){
        console.log('constructor')
        super(props)
        this.state = {scroll:0}
        //debugger
      
    }

    componentWillMount(){
        console.log('ComponentWillMount')
        this.setState({mensajeInicial:'mensajeModificado'})
        //debugger
    }
    componentDidMount(){
        console.log('ComponentDidMount')
        document.addEventListener('scroll',()=>{
            this.setState({scroll:window.scrollY})
        })
        //debugger
    }

    render(){
        console.log('render')
        //debugger
        return[ 
            <div>
            <h4>El scroll es {this.state.scroll}</h4>    
            <h4>Ciclo de montaje: Componente DidMount</h4>
            <p>Este componente nos muestra como podemos usar el componente DidMount</p>
            <p>Como queremos añadir un evento al scroll, vamos a hacer que
            la ventana sea lo suficientemente grande como para que tenga que ir hacia abajo
            y haga que no quepa todo el contenido en el alto de la página.
            De esta forma podremos utilizar el evento para controlar cuando el usuario
            está moviéndose por el scroll</p>
            <p>Como queremos añadir un evento al scroll, vamos a hacer que
            la ventana sea lo suficientemente grande como para que tenga que ir hacia abajo
            y haga que no quepa todo el contenido en el alto de la página.
            De esta forma podremos utilizar el evento para controlar cuando el usuario
            está moviéndose por el scroll</p>
            <p>Como queremos añadir un evento al scroll, vamos a hacer que
            la ventana sea lo suficientemente grande como para que tenga que ir hacia abajo
            y haga que no quepa todo el contenido en el alto de la página.
            De esta forma podremos utilizar el evento para controlar cuando el usuario
            está moviéndose por el scroll</p>
            <p>Como queremos añadir un evento al scroll, vamos a hacer que
            la ventana sea lo suficientemente grande como para que tenga que ir hacia abajo
            y haga que no quepa todo el contenido en el alto de la página.
            De esta forma podremos utilizar el evento para controlar cuando el usuario
            está moviéndose por el scroll</p>
            <p>Como queremos añadir un evento al scroll, vamos a hacer que
            la ventana sea lo suficientemente grande como para que tenga que ir hacia abajo
            y haga que no quepa todo el contenido en el alto de la página.
            De esta forma podremos utilizar el evento para controlar cuando el usuario
            está moviéndose por el scroll</p>
            <p>Como queremos añadir un evento al scroll, vamos a hacer que
            la ventana sea lo suficientemente grande como para que tenga que ir hacia abajo
            y haga que no quepa todo el contenido en el alto de la página.
            De esta forma podremos utilizar el evento para controlar cuando el usuario
            está moviéndose por el scroll</p>
            <p>Como queremos añadir un evento al scroll, vamos a hacer que
            la ventana sea lo suficientemente grande como para que tenga que ir hacia abajo
            y haga que no quepa todo el contenido en el alto de la página.
            De esta forma podremos utilizar el evento para controlar cuando el usuario
            está moviéndose por el scroll</p>
            <p>Como queremos añadir un evento al scroll, vamos a hacer que
            la ventana sea lo suficientemente grande como para que tenga que ir hacia abajo
            y haga que no quepa todo el contenido en el alto de la página.
            De esta forma podremos utilizar el evento para controlar cuando el usuario
            está moviéndose por el scroll</p>
            <p>Como queremos añadir un evento al scroll, vamos a hacer que
            la ventana sea lo suficientemente grande como para que tenga que ir hacia abajo
            y haga que no quepa todo el contenido en el alto de la página.
            De esta forma podremos utilizar el evento para controlar cuando el usuario
            está moviéndose por el scroll</p>
            <p>Como queremos añadir un evento al scroll, vamos a hacer que
            la ventana sea lo suficientemente grande como para que tenga que ir hacia abajo
            y haga que no quepa todo el contenido en el alto de la página.
            De esta forma podremos utilizar el evento para controlar cuando el usuario
            está moviéndose por el scroll</p>
            <p>Como queremos añadir un evento al scroll, vamos a hacer que
            la ventana sea lo suficientemente grande como para que tenga que ir hacia abajo
            y haga que no quepa todo el contenido en el alto de la página.
            De esta forma podremos utilizar el evento para controlar cuando el usuario
            está moviéndose por el scroll</p>
            <p>Como queremos añadir un evento al scroll, vamos a hacer que
            la ventana sea lo suficientemente grande como para que tenga que ir hacia abajo
            y haga que no quepa todo el contenido en el alto de la página.
            De esta forma podremos utilizar el evento para controlar cuando el usuario
            está moviéndose por el scroll</p>
            <p>Como queremos añadir un evento al scroll, vamos a hacer que
            la ventana sea lo suficientemente grande como para que tenga que ir hacia abajo
            y haga que no quepa todo el contenido en el alto de la página.
            De esta forma podremos utilizar el evento para controlar cuando el usuario
            está moviéndose por el scroll</p>
            <p>Como queremos añadir un evento al scroll, vamos a hacer que
            la ventana sea lo suficientemente grande como para que tenga que ir hacia abajo
            y haga que no quepa todo el contenido en el alto de la página.
            De esta forma podremos utilizar el evento para controlar cuando el usuario
            está moviéndose por el scroll</p>
            <h4>El scroll es {this.state.scroll}</h4>    

            </div>
        ]
    }
}

export default ComponentDidMount