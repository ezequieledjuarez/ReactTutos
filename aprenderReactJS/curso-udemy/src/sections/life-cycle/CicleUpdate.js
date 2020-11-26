
import React, {Component} from 'react'
import PropTypes from 'prop-types'
const ANIMAL_IMAGES = {
    cat: 'https://www.petmd.com/sites/default/files/petmd-cat-happy-13.jpg',
    dolphin:'https://4.bp.blogspot.com/-hfW9FyxhxnA/T9CGpSAgUzI/AAAAAAAACd4/H282htZT3pU/s1600/delfin-lengua-fuera.jpg',
    panda:'https://nationalzoo.si.edu/sites/default/files/styles/slide_1400x700/public/support/adopt/giantpanda-03.jpg'
}

class AnimalImage extends Component{
    state = {src: ANIMAL_IMAGES[this.props.animal]}
    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps')
        console.log(nextProps)
        this.setState({src: ANIMAL_IMAGES[nextProps.animal]})
    }
    render(){
        return (
            <div>
                <p> SELECTED {this.props.animal}</p>
                <img
                    alt={this.props.animal}
                    src={this.state.src}
                    width='250'
                />
            </div>
        )
    }
}

AnimalImage.propTypes = {
    animal: PropTypes.oneOf(['cat','dolphin','panda'])
}
AnimalImage.defaultProps = {
    animal:'panda'
}
class CicleUpdate extends Component {
    state = {animal: 'panda'}
    render(){
        return (
            <div>
              <h4>Ciclo de Actualizacion, Ejemplo de ComponentWillReceiveProps</h4>
                <button onClick = {()=> this.setState({animal:'panda'})}>
                    Panda
                </button>
                <button onClick = {()=> this.setState({animal:'cat'})}>
                    Cat
                </button>
                <button onClick = {()=> this.setState({animal:'dolphin'})}>
                    Dolphin
                </button>
              <AnimalImage animal = {this.state.animal}/>
            </div>
        )
    }
}


export default CicleUpdate