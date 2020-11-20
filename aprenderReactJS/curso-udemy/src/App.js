import React, {Component}  from 'react'
import logo from './logo.svg';
import './App.css';

//No es HMTL es JSX, sintaxis XML que se preprocesa y se convierte en JS
/*function Intro(props){
  return <h1>{props.title}</h1>
}*/

/*const Intro = (props) => <h2> {props.title} </h2>*/

class Intro extends Component{
  render(){
    return <h1>{this.props.title}</h1>
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Intro title = "Intro desde Props" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <h3>Aprendiendo React</h3>
        </a>
      </header>
    </div>
  );
}

export default App;
