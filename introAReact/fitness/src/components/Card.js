import React from 'React'
import excerciseImg from'../images/excercise.png'
class Card extends React.Component{
    render(){
    return (
        <div>
            <div>
                <img src={excerciseImg}/>
            </div>
            <div>
                <h1>Technique Guides</h1>
                <p>Learn amazing street workout and calisthenics</p>
            </div>
        </div>
    )
    }
}

export default Card