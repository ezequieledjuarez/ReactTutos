import logo from './logo.svg';
import './App.css';
//No es HMTL es JSX, sintaxis XML que se preprocesa y se convierte en JS
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Introducción a React.js</h1>
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
