import React, { Component } from 'react'

export default class Forms extends Component{
    handleSubmit =(e)=>{
        e.preventDefault()
        const name = this.inputName.value
        const email = this.inputTwitter.value
        console.log({name,email})
    }
    handleChange(e){
        console.log('handleChange')
        console.log(e.target.checked)
    }
    render(){
        return(
        <div>
            <h4>Formularios</h4>
            <form onSubmit={this.handleSubmit}>
                <p>
                    <label htmlFor='name'>Nombre: </label>
                    <input 
                        id='name'
                        name='userName'
                        placeholder = 'Introduce tu nombre'
                        ref={inputElement=>this.inputName=inputElement}/>
                </p>
                <p>
                <label htmlFor='twitter'>Twitter: </label>
                <input
                    id='twitter'
                    name='twitterAccount'
                    placeholder='Introduce tu Twitter'
                    ref={inputElement=>this.inputTwitter=inputElement}/>
                </p>
                <label>
                    <input 
                        onChange={this.handleChange}
                        type='checkbox'/>    
                        Accepted Terms
                </label>    
                <button>Enviar</button>    
            </form>
            
        </div>
        )
    }
}