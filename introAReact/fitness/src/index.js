/*const element = document.createElement('h1')
element.innerText='Hello React'
const container = document.getElementById('root')
container.appendChild(element)*/

import React from 'react'
import ReactDOM from 'react-dom'

const element = <h1>Hello React</h1>
const container = document.getElementById('root')

//ReactDOM.render(__QueElemento__, __Donde__)

ReactDOM.render(element,container)