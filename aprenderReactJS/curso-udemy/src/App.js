import React, { Component } from "react";

class Button extends Component{
    render(){
        return(
            <button style={{borderColor: this.props.borderColor, display: 'block'}}>
                {this.props.label}
            </button>
        )
        
    }
}
Button.defaultProps = {
    borderColor: '#09f'
}
    class ButtonDanger extends Component{
        render(){
            return <Button borderColor ='red' label={this.props.label}/>
        }
    }

    class ButtonWithLegend extends Component{
        render(){
            return(
                <div>
                    <Button label={this.props.label} borderColor={this.props.borderColor}/>
                    <small>{this.props.legend}</small>
                </div>
            )
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
                <br />
                <ButtonWithLegend
                    label = 'Boton con explicacion'
                    legend = 'Clickea para hacer algo'/>
            </div>
        )
    }
}
export default App;