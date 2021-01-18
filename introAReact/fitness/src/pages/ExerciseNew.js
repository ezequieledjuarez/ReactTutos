import React from 'react'

class ExerciseNew extends React.Component{
    
    state = {}

    handleSubmit = e =>{
        e.preventDefault()
        console.log(this.state)
    }

    handleChange = e =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render(){
        return(
           <div className = "container">
               <form
                    onSubmit = { this.handleSubmit}
               >
                   <div className = "form-group">
                       <input
                            className = "form-control"
                            name = "title"
                            onChange = { this.handleChange }
                            placeholder = "title"
                            type = "text"
                            value={this.state.title}
                       />
                   </div>
                   <div className = "form-group">
                       <input
                            className = "form-control"
                            name = "description"
                            onChange = {this.handleChange}
                            placeholder = "description"
                            type = "text"
                            value={this.state.description}
                       />
                    </div>
                    <div className = "form-group">
                       <input
                            className = "form-control"
                            name = "img"
                            onChange = {this.handleChange}
                            placeholder = "img"
                            type = "text"
                            value={this.state.img}
                       />
                   </div>
                   <div className = "form-row">
                       <div className = "col">
                            <input
                                className = "form-control"
                                name = "leftColor"
                                onChange = {this.handleChange}
                                placeholder = "leftColor"
                                type = "text"
                                value={this.state.leftColor}
                                
                            />
                       </div>
                       <div className = "col">
                            <input
                                className = "form-control"
                                name = "rightColor"
                                onChange = {this.handleChange}
                                placeholder = "rightColor"
                                type = "text"
                                value={this.state.rightColor}
                                
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