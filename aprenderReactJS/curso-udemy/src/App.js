import React, { Component } from "react";
// Las clases deben ir en mayus
class Name extends Component{
        //State va a recibir un objeto con K/V
        state = {name: 'EzzeGuason'}
        render(){
        
        return <span>{this.state.name}</span>
        }
    }
    
    class App extends Component{
        render() {
            return (
                <div className = "App">
               <p> Colocando mi nombre a través de una Class Field</p>
               <Name />
                </div>
            )
        }
    }
    

export default App;
