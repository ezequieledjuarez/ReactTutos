import React, { Component } from "react";
import ComponentWillUnmount from './sections/life-cycle/ComponentWillUnmount.js'
class App extends Component{
    render() {
        
        return (
            <div className='App'>
            <ComponentWillUnmount />   
            </div>
        )
    }
}
export default App;