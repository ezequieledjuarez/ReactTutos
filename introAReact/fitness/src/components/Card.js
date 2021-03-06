import React from 'react'
import imageExcercise from '../images/exercise.png'
import imageCircle from '../images/circles.png'
import './styles/Card.css'

class Card extends React.Component{

/*    constructor(props){
        super(props)
        this.state = {
            image: 'https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/bulbasaur.png?alt=media&token=567caf19-af47-414e-a9d4-3854ab24c7dc'
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                image: imageExcercise
            })
        }, 5000);
    }
*/
    render(){
        const {description, img, leftColor, rightColor, title} = this.props
    return (
        <div className="card mx-auto Fitness-Card"
            style={{
                    backgroundImage : `url(${imageCircle}), linear-gradient(to right, ${leftColor}, ${rightColor}) `

                }}
                >
            <div className="card-body">
                <div className="row center">
                     <div className="col-6">
                        <img
                            className="float-right" 
                            src={img}/>
                    </div>
                    <div className="col-6 Fitness-Card-Info">
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
    }
}

export default Card