import React from 'react'
import {ButtonBackToHome} from '../components/ButtonBackToHome'
export const NotFound = () =>(
    <div>
    <h3 className='title' style={{color:'#000', fontSize:30}}>Error 404</h3>
    <h2 className='subtitle'>La página a la que intentas acceder no existe</h2>
    <ButtonBackToHome/>
    </div>
)