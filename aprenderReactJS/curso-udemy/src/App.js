import React, { Component } from "react";
import Forms from './sections/Forms.js'

class App extends Component{
    render() {
        //Cada descendiente del array debe tener una unique key
        return (
            <div className='App'>
                <h4>Trabajando con Forms</h4>
                <Forms/>    
            </div>
        )
    }
}
export default App;
