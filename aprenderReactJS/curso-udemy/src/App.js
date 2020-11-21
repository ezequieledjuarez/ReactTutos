import React, { Component } from "react";


class App extends Component{
    constructor(){
        super()
        this.state = {mouseX:0, mouseY:0}
    }
    handleClick(e){
        console.log(e)
        console.log(e.nativeEvent)
        alert('Me clickeaste')
    }
//Las arrow functions enlazan siempre el contexto dónde se declaran
    handleMouseMove = (e)=>{
        const{clientX,clientY} = e
        this.setState({mouseX: clientX, mouseY:clientY})
    }
    render() {
        //Cada descendiente del array debe tener una unique key
        return (
            <div className='App'>
                <h4>Trabajando con Eventos</h4>
                <button onClick={this.handleClick}> 
                Clickeame
                </button>
                <div
                    onMouseMove={this.handleMouseMove}
                    style={{
                        border: '1px solid #000',
                        marginTop: 10,
                        padding:10
                    }}
                >
                    <p>{this.state.mouseX},{this.state.mouseY}</p>
                </div>
            </div>
        )
    }
}
export default App;
