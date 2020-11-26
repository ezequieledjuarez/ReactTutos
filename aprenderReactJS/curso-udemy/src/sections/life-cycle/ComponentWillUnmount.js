import React, { Component } from 'react'
class ComponenteADesmontar extends Component{
    state ={windowWidth:0}

    _updateStateWindowWidth = () =>{
        console.log('_updateStateWindowWidth')
        this.setState({windowWidth: document.body.clientWidth})
    }

    componentDidMount(){
        this._updateStateWindowWidth()
        window.addEventListener(
            'resize',
            this._updateStateWindowWidth
        )
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
        window.removeEventListener(
            'resize',
            this._updateStateWindowWidth
        )
    }

    render(){
        return(
            <div>
                <h4>Ancho de la ventana: {this.state.windowWidth}</h4>
            </div>

        )
    }
}
class ExComponentWillUnmount extends Component{
    state = {mostrarComponente: true}
    render(){
        if(this.state.mostrarComponente)
        {return(
            <div>
                <h4>Ciclo de desmontaje: componente WillUnmount</h4>
                <ComponenteADesmontar/>
                <button onClick={()=>this.setState({mostrarComponente:false})}>
                    Desmontar
                </button>
                <p>Componente desmontado</p>
            </div>
        )
    }
    return(
        <p>Componente desmontado</p>
    )
    }
}
 export default ExComponentWillUnmount