import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css"; //No es HMTL es JSX, sintaxis XML que se preprocesa y se convierte en JS

/*function Intro(props){
  return <h1>{props.title}</h1>
}*/

/*const Intro = (props) => <h2> {props.title} </h2>*/

class Intro extends Component {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}

class Text extends Component {
  render() {
    const textoSegunBoole = this.props.isActivated ? "On" : "Off";
    const mappedNumbers = this.props.arrayOfNumbers.map(n=> n * 3)
    return (
      <div>
        <p>{mappedNumbers.join(', ')}</p>
        <p>{this.props.objectWithInfo.key}</p>
       {/*  <p>{this.props.number}</p>
        <p>{this.props.text}</p>
        <p>{textoSegunBoole}</p> */}
      </div>
    );
  }
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Intro title="Intro desde Props" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <Text 
            arrayOfNumbers = {[2,3,10]}
            isActivated
            number={2} 
            objectWithInfo = {{key: 'Firstvalue', key2:'otherValue'}}
            text="Cadena de texto" 
          />
        </a>
      </header>
    </div>
  );
}

export default App;
