import React, { Component } from "react";
import ComponentDidMount from './sections/life-cycle/componentDidMount'
class App extends Component{
    render() {
        //Cada descendiente del array debe tener una unique key
        return (
            <div className='App'>
            <ComponentDidMount />   
            </div>
        )
    }
}
export default App;