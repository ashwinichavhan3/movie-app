import React from "react";
import "./style.css";
import { initialMovies } from  "./movies.js";
import MovieDetail from "./MovieDetail.js"
import List from './List.js'

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: initialMovies
  
};
 
    };
  
  
  renderList(){
   // console.log(this.state.movies.movie1);
    //const {movies} = initialMovies;
    return (this.state.movies.movie1).map(v => {
      //console.log(v);
        return(
          <><div key={v.id} className="card bg-info text-white">
             <div className="card-body">
              <h3>{v.title}</h3>
              <div>cast:{v.cast}</div>
              <div>Rating:{v.rating}</div>

              <MovieDetail details={v}/>
        
              </div>
          </div><br/></>
        )
      })
  }

  render(){
    return(
    
       <div className="container">
               <h1>Movies App!</h1>
               <List/>
         {this.renderList()}
       </div>
    );
  }
}


