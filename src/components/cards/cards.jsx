import React, { Component } from 'react';
import "../cards/cards.css"


class Cards extends Component {
      constructor(){
          super()
        this.state = {
            hover:-1,
        };
       
      }

render(){

        return(
         
            <div id= "card" key ={this.props.index} onMouseEnter={()=> {this.setState({hover:this.index})}} onMouseLeave={()=> {this.setState({hover:-1})}}>
             <img src= {this.props.Poster} 
             alt="movie poster" width="100%"/>
             <h4>{this.props.Year}</h4>
             <h3>{this.props.Title}</h3> 
             <h5 className ={`rating ${this.state.hover === this.index ? "": "hide"}`} >{this.props.imdbID}</h5>
            </div> 
           
        )
    }
}

export default Cards ;
