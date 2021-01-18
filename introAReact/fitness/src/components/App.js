import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Exercises from '../pages/Exercises'
import ExercisesNew from '../pages/ExerciseNew'
import NotFound from '../pages/NotFound'

const App = () =>(
    <BrowserRouter>
        <Switch>
            <Route 
                component={Exercises}
                exact path = "/exercise" 
            />

            <Route
                component = {ExercisesNew}
                exact path = "/exercise/new"
            />

            <Route 
                component = {NotFound}
            />
        </Switch>
    </BrowserRouter>
)


export default App