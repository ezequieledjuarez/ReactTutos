/*const element = document.createElement('h1')
element.innerText='Hello React'
const container = document.getElementById('root')
container.appendChild(element)*/

import React from 'react'
import ReactDOM from 'react-dom'

const user = {
  firstName: 'Ezze',
  lastName: 'Juarez',
  avatar: 'https://cdn0.iconfinder.com/data/icons/star-wars/512/bounty_hunter-512.png'
}

function getName(user){
  return `${user.firstName} ${user.lastName}`
}

function getGreeting(user){
  if(user){
    return  <h1>Hello {getName(user)}</h1>
  }
  return <h1>Hello Stranger</h1>
}

const element = (
    <div>
      <h1>{getGreeting(user)}</h1>
    <img src={user.avatar}/>  
    </div>
  )
const container = document.getElementById('root')

//ReactDOM.render(__QueElemento__, __Donde__)

ReactDOM.render(element,container)