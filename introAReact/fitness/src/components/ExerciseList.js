import React, { Component } from 'react'
import Card from './Card'

const ExerciseList = ({exercises}) => (
    <div>
        {
            exercises.map((exercise)=>{
                return(
                    <Card 
                        description={exercise.description}
                        img={exercise.img}
                        key = {exercise.id}
                        leftColor={exercise.leftColor}
                        rightColor={exercise.rightColor}
                        title={exercise.title}
                    />    
                )
            })
        
        }
  
    </div>
)


export default ExerciseList