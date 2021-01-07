import React, { Component } from 'react'
import Card from './Card'

function ExcerciseList(props){
    return(
        <div>
            {
                props.exercises.map((exercise)=>{
                    return(
                        <Card 
                            description={exercise.description}
                            img={exercise.img}
                            leftColor={exercise.leftColor}
                            rightColor={exercise.rightColor}
                            title={exercise.title}
                        />    
                    )
                })
              
            }
          
        </div>
    )
}

export default ExcerciseList