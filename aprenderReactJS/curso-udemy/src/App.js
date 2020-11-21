import React, { Component } from "react";
// Las clases deben ir en mayus
class Contador extends Component{

        constructor(){
            super()
            this.state = {contador: 1}
        
            setInterval(()=> {
            this.setState({contador: this.state.contador +1 })
        }, 1000)
        }
        
        render(){
        
        return <span>{this.state.contador}</span>
        }
    }
    
    class App extends Component{
        render() {
            return (
                <div className = "App">
               <p> Haciendo un contador con ReactJS</p>
               <Contador />
                </div>
            )
        }
    }
    

export default App;
