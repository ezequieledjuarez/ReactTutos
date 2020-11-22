import React, { Component } from "react";
import PropTypes from 'prop-types'
class Article extends Component{
    static propTypes ={
        author: PropTypes.string.isRequired
    }
    constructor(props){
        super(props)
        if(typeof props.author === 'undefined'){
            console.warn('author prop is required')
            throw new Error('author prop is required')
        }
    }
    render() {
        const{author, children, date, title} = this.props
        return (
            <div>
                <section>
                    <h2>{title}</h2>    
                    <p><em>Escrito por {author}</em></p>
                    <date>{date}</date>        
                    <article>
                        {children}
                    </article>    
                </section>    
            </div>
        )
    }
}
class App extends Component{
    render() {
        //Cada descendiente del array debe tener una unique key
        return (
            <div className='App'>
                <h4>Trabajando con Children props</h4>
                <Article
                    author='EzzeGuason'
                    date={new Date().toLocaleDateString()}
                    title='Articulo sobre la propiedad Children'
                >
                    <p>El contenido que envolvemos dentro del componente Article será enviado al componente como children</p>
                    <strong>Y mantiene las propiedades y componentes que hay añadidos dentro</strong>        
                </Article>      
            </div>
        )
    }
}
export default App;