import React, { Component } from "react";
import PropTypes from 'prop-types'
/* class Article extends Component{
    render(){
        return(
            <section>
                <h2>{this.props.title}</h2>
                <p><em>Escrito por {this.props.author}</em></p>
                <date>{this.props.date}</date>
                <article>{this.props.children}</article>
            </section> 
        )
    }
} */

function Article(props){
    return(
        <section>
            <h2>{props.title}</h2>
            <p><em>Escrito por {props.author}</em></p>
            <date>{props.date}</date>
            <article>{props.children}</article>
        </section> 
    )
}

Article.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    children: PropTypes.any
}

//Solo funciona con stateless components
const Button = ({ borderColor = 'red',label}) =>(
    <button stylee ={{borderColor, display:'block'}}>
        {label}
    </button>
)

Button.propTypes={
    borderColor: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,

}


/* lass Button extends Component{
     render(){
         return(
                <button style={{borderColor: this.props.borderColor, display:'block'}}>
                    {this.props.label}   
                </button>
         )
     }
} */

class App extends Component{
    render(){
        return(
            <div className = "App">
                <h4>Stateless Component</h4>
                <Article
                    author='EzzeGuason'
                    date={new Date().toLocaleDateString()}
                    title= 'Articulo sobre props Children'
                >
                <p>El contendio que envolvemos dentro del componente Article será enviado al componente como this.props.children</p>    
                <strong>Y mantiene las etiquetas y componentes que hayas añadido dentro</strong>
                </Article>
                <Button label = 'comentar articulo' />
            </div>
        )
    }
}
export default App;