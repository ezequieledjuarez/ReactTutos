import React, { Component } from 'react'
const HelloRender = (props) => <h1>Hello,Render</h1>
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

    render(){
        console.log('render')
        return[ 
            <div>
            <h1 key='A'>titulo, primer elemento</h1>
            <HelloRender key='B'/>
            <HelloRender key='C'/>
            <h4 key='D'>Cuarto Elemento</h4>
            </div>
        ]
    }
}

export default ComponentWillMount