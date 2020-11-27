import {Component} from 'react'
import {Switch ,Route} from 'react-router-dom'
import {Detail} from './pages/Detail.js'
import {Home} from './pages/Home'
import {NotFound} from './pages/NotFound'
import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {
  render(){
    return (
      <div className="App">
        <Switch>
          <Route component={Home} exact path = '/'/>
          <Route component={Detail} path='/detail/:movieId'/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    );
  }
}

export default App;
