import React, { Component } from "react";

class App extends Component{
    constructor (props){
        super(props)
        this.state = {mensajeInicial: 'mensajeInicial'}
        //Bindeo del contexto al método
        //this.handleClick = this.handleClick.bind(this)
    }

    handleClick = () =>{
        this.setState({mensajeInicial : 'mensajeCambiado'})
    }
    render() {
        //Cada descendiente del array debe tener una unique key
        return (
            <div className='App'>
                <h4>Ciclo de Montaje: Constructor</h4>
                {this.state.mensajeInicial}
                <button onClick={this.handleClick}>Cambiar mensaje</button>
            </div>
        )
    }
}
export default App;