import React, { Component } from "react";


class App extends Component{
    render() {
        //Cada descendiente del array debe tener una unique key
        return (
            <div className='App'>
                <h4>Trabajando con Eventos</h4>
                <button onClick={()=>alert('Me clickeaste')}> 
                Clickeame
                </button>
            </div>
        )
    }
}
export default App;
