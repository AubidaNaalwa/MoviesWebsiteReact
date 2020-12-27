import React, { Component } from 'react';
import './User.css'
import { Link} from 'react-router-dom'

class Movie extends Component{


rentMovie =() =>{
    if(this.props.addMovieToUser)
        this.props.addMovieToUser(this.props.user, this.props.movie)
}

removeFromRent =() =>{
    if(this.props.removeFromRent)
    this.props.removeFromRent(this.props.user, this.props.movie)
}
 render(){
        return(
                <div className="movieContainer" >
                    <Link to={`/movies/${this.props.movie.id}`} className="imageConatiner">
                   <div>
                   {this.props.movie.id} : {this.props.movie.title}
                   </div>
                   </Link>
                   <div to={`/movies/${this.props.movie.id}`} className="imageConatiner">
                    <img src={this.props.movie.img} className="movie"   />{this.props.rented ? <i className="far fa-times-circle addFont" onClick ={this.removeFromRent}></i>:<i className="fab fa-medrt addFont" onClick ={this.rentMovie}></i>}
                   </div>
                   {this.props.tap ? <div className="details">
                       {this.props.movie.descrShort}
                   </div>:''}
                </div>
        )
    }
}

export default Movie;