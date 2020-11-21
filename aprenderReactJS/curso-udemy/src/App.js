import React, { Component } from "react";


class App extends Component{
    handleClick(e){
        console.log(e)
        console.log(e.nativeEvent)
        alert('Me clickeaste')
    }
    render() {
        //Cada descendiente del array debe tener una unique key
        return (
            <div className='App'>
                <h4>Trabajando con Eventos</h4>
                <button onClick={this.handleClick}> 
                Clickeame
                </button>
            </div>
        )
    }
}
export default App;
