
import React, {Component, PureComponent} from 'react'
import PropTypes from 'prop-types'
const ANIMAL_IMAGES = {
    panda:'https://nationalzoo.si.edu/sites/default/files/styles/slide_1400x700/public/support/adopt/giantpanda-03.jpg',
    cat: 'https://www.petmd.com/sites/default/files/petmd-cat-happy-13.jpg',
    dolphin:'https://4.bp.blogspot.com/-hfW9FyxhxnA/T9CGpSAgUzI/AAAAAAAACd4/H282htZT3pU/s1600/delfin-lengua-fuera.jpg'
}

const ANIMALS = Object.keys(ANIMAL_IMAGES)

class AnimalImage extends PureComponent{
    state = {src: ANIMAL_IMAGES[this.props.animal]}
    componentWillReceiveProps(nextProps){
        console.log('1.componentWillReceiveProps')
        console.log(nextProps)
        this.setState({src: ANIMAL_IMAGES[nextProps.animal]})
    }
    render(){
        console.log('--> render')
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
    animal: PropTypes.oneOf([(ANIMALS)])
}


class CicleUpdate extends Component {
    state = {animal: 'panda'}

    _renderAnimalButton = (animal)=>{
        return(
            <button 
            //disabled={animal === this.state.animal}
            key = {animal} 
            onClick = {()=> this.setState({animal})}>
               {animal}
            </button>
        )
    }

    
    render(){
        return (
            <div>
              <h4>Ciclo de Actualizacion, Ejemplo de ShouldComponentUpdate</h4>
               {ANIMALS.map(this._renderAnimalButton)}
              
              <AnimalImage animal = {this.state.animal}/>
            </div>
        )
    }
}


export default CicleUpdate