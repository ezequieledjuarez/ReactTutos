import React, { Component } from 'react'

class ComponenteA extends Component{
    render() {
        return <p>ComponenteA</p>
    }
}

class ComponenteB extends Component{
    render(){
        return <p>ComponenteB</p>
    }
}

export default class ConditionalSection extends Component{
    constructor(){
        super()
        this.state = {mostrarA:false }
    }
    render() {
        
        return (
            <div>
               <h4> Conditional Rendering </h4>
               {
                this.state.mostrarA
                ?<ComponenteA/>
                :<ComponenteB/>
                }
            </div>
        )
    }
}