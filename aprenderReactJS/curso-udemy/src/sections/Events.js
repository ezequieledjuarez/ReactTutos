/* import React, { Component } from 'react'

export default class Events extends Component{

    constructor(){
        super()
        this.state = {mouseX:0, mouseY:0}
    }
}


function handleClick(e){
    console.log(e)
    console.log(e.nativeEvent)
    alert('Me clickeaste')
}

//Las arrow functions enlazan siempre el contexto dónde se declaran

handleMouseMove = (e)=>{
    const{clientX,clientY} = e
    this.setState({mouseX: clientX, mouseY:clientY})
} */