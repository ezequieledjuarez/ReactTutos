import React, { Component } from "react";
import ComponentDidCatch from './sections/life-cycle/ComponentDidCatch.js'
class App extends Component{
    render() {
        
        return (
            <div className='App'>
            <ComponentDidCatch />   
            </div>
        )
    }
}
export default App;