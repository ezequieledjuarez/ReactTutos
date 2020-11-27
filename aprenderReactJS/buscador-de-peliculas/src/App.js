import {Component} from 'react'
import {Title} from './components/Title.js'
import {SearchForm} from './components/SearchForm.js'
import {MoviesList} from './components/MoviesList.js'
import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {
  state = { usedSearch: false, 
            results:[]}

  _handleResults = (results)=>{
    
    this.setState({results, usedSearch: true})
  }

  _renderResults(){
    return this.state.results  === 0
      ? <p>No hay resultados para mostrar</p>
      : <MoviesList movies={this.state.results}/>
    
  }

  render(){
    return (
      <div className="App">
        <Title>Buscador de Peliculas</Title>
        <div className = "SearchForm-wrapper">
          <SearchForm onResults={this._handleResults}/>
          {
            this.state.usedSearch
            ? this._renderResults()
            : <small>Ingresa el nombre de una película</small>
          }
          
        </div>
      </div>
    );
  }
}

export default App;
