import React from 'react'

class ExerciseNew extends React.Component{

    handleClick= () =>{
        console.log('Clicked')
    }

    render(){
        return(
           <div className = "container">
               <form>
                   <div className = "form-group">
                       <input
                            className = "form-control"
                            placeholder = "title"
                            type = "email"
                       />
                   </div>
                   <div className = "form-group">
                       <input
                            className = "form-control"
                            placeholder = "description"
                            type = "text"
                       />
                    </div>
                    <div className = "form-group">
                       <input
                            className = "form-control"
                            placeholder = "img"
                            type = "text"
                       />
                   </div>
                   <div className = "form-row">
                       <div className = "col">
                            <input
                                className = "form-control"
                                type = "text"
                                placeholder = "leftColor"
                            />
                       </div>
                       <div className = "col">
                            <input
                                className = "form-control"
                                type = "text"
                                placeholder = "rightColor"
                            />
                       </div>
                    </div>
                <button
                    className = "btn btn-primary"
                    type = "submit"
                >
                    Submit
                </button>   
               </form>
           </div>
        )
    }
}

export default ExerciseNew