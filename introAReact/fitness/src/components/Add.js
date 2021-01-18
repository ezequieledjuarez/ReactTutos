import React from 'react'
import imageAdd from '../images/add.png'
import {Link} from 'react-router-dom'
import './styles/Add.css'

const Add = () =>(
    <Link to = "/exercise/new">
        <img src = {imageAdd} className = "Fitness-Add"/>
    </Link>
)


export default Add