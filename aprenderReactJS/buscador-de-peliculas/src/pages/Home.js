import React, { Component } from 'react'
import {Title} from '../components/Title'
import {SearchForm} from '../components/SearchForm'
import {MoviesList} from '../components/MoviesList'

export class Home extends Component{
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
        return(
            <div className = 'home'>
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
        )
    }
}