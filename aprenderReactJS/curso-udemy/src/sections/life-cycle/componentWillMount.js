import React, { Component } from 'react'

class ComponentWillMount extends Component{
    constructor (props){
        console.log('constructor')
        super(props)
        this.state = {mensajeInicial: 'mensajeInicial'}
      
    }

    componentWillMount(){
        console.log('ComponentWillMount')
        this.setState({mensajeInicial:'mensajeModificado'})
    }

    handleClick = () =>{
        this.setState({mensajeInicial : 'mensajeCambiado'})
    }
    render() {
        console.log('render')
        return (
            <div className='App'>
                <h4>Ciclo de Montaje: Constructor</h4>
                {this.state.mensajeInicial}
                <button onClick={this.handleClick}>Cambiar mensaje</button>
            </div>
        )
    }
}

export default ComponentWillMount