import React, { Component } from 'react';
import '../search/search.css'
import axios from 'axios';
import Cards from '../cards/cards'

class Search extends Component {

   state={
     search:"war",
     movies:[],
     loader:true,
     
   }



  componentDidMount(){
    axios.get(`https://www.omdbapi.com/?apikey=45f0782a&s=war`)
    .then(res => {
        this.setState({movies: res.data.Search, loader: false})
        
     })
  }

  updateSearch=(e)=>{
    this.setState({search: e.target.value})
  }

  updateAxios = (e)=>{
    axios.get(`https://www.omdbapi.com/?apikey=45f0782a&s=${e.target.value}`)
    
    .then(res => {
      if(res.data.Response === 'True')
      { 
        this.setState({movies: res.data.Search, loader: false})
      }
        
        
     })
  }

  funcGroup(e){
    this.updateSearch(e)
      this.updateAxios(e)
    
   
  }


  
   
  render() {

    return (

     

      <div>
        <div  id="container" >
          <i class="fas fa-search"></i>
          <input type="text" placeholder="Search for Movie.." 
          autoFocus
          onChange={(e)=>this.funcGroup(e)}
          value={this.state.search}
          />
          
        </div>

        {this.state.loader ? 
        ( <div id="overlay">
          <i class="fas fa-spinner fa-pulse"></i>
          </div>):
          (<div id="crad_wrapper">
          {this.state.movies.map( (item,index) => 
          <Cards {...item} index={index} />
           )}

        </div> )}
         
        
      </div>
     
      
    );
  }
}



export default Search;