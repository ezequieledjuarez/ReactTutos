import React, { Component } from "react";
import cars from './data/cars.json'

class CarItem extends Component{
    render(){
        const {car, id} = this.props
        return(
            <li key = {car.id}>
                <p><strong>Key: </strong>{id}</p>
                <p><strong>Nombre: </strong>{car.name}</p>
                <p><strong>Marca: </strong>{car.company}</p>
            </li>
            )
    }
}
class App extends Component{
    render() {
        //Cada descendiente del array debe tener una unique key
        return (
            <div className='App'>
                <h4>Trabajando con Objetos</h4>
                <ul>
                    {
                        cars.map(car=>{
                            return <CarItem key= {car.id} id={car.id} car={car}/>
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default App;
