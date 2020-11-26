import React, { Component } from "react";

class Button extends Component{
    constuctor(props){
        super()
        this.borderColor ='#09f'
    }
    render(){
        return(
            <button style={{borderColor: this.borderColor, display: 'block'}}>
                {this.props.label}
            </button>
        )
        
    }
}
    class ButtonDanger extends Button{
        constructor(props){
            super()
            this.borderColor = 'red'
        }
    }

    class buttonWithLegend extends Button{
        render(){
            <div>
                {super.render()}
                <small>{this.props.legend}</small>
            </div>
        }
    }

class App extends Component{
    render() {
        
        return (
            <div className='App'>
                <h4>Composicion vs Herencia</h4>  
                <Button label='Click aqui'/>
                <br />
                <ButtonDanger label='no Click aqui'/>
                <br/>
                <buttonWithLegend
                    label = 'Boton con explicacion'
                    legend = 'Clickea para hacer algo'/>
            </div>
        )
    }
}
export default App;