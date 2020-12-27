import React, { Component } from 'react';
import Movie from './Movie'
import './Home.css'

class Home extends Component {

    constructor(){
        super()
        this.state ={
            searchVal:'',
            searched:[]
        }
    }

    searchupdate = (e) => {
        this.setState({
            searchVal:e.target.value
        })
    }

    
    Search = () =>{
        let movies =[]
        if(this.state.searchVal){
            movies =  this.props.data.movies.filter(v => {return v.title.includes(this.state.searchVal)})
        }
       this.setState({
        searched:movies
       })
    }
    
    
    render() {
        const user = this.props.data.users[this.props.data.currentUser]
        const movies = this.props.data.movies
        return (
            
            <div>
                <ul>
                    <li><a className="active" href="/">Home</a></li>
                    <li><a href="/catalog">Catalog</a></li>
                    <li className="right">Leflex</li>
                    <li className="right">{user.name}</li>
                </ul>
                <div id="headContainer">
                    <div className="search">
                        <input placeholder="search" value ={this.state.searchVal} onChange={this.searchupdate}></input>
                        <span onClick={this.Search}>Search</span>
                        <span className="right" style={{ color: 'black' }}>Budget :{user.pudget ?? 0}$</span>
                    </div>
                </div>
               {user.movies?
                <div id="rented">
                    <div>
                        Rented:
                    </div>
                    <div id="moviesSearchedContainer">
                        {user.movies.map(v =>  <Movie user={user} key = {v.id} movie = {v} tap ={false} rented ={true} removeFromRent={this.props.removeFromRent}/>)}
                    </div>
                </div>    
            :''}
                {this.state.searched.length > 0 ? (
                    <div id="searchContainer">
                       <br/>
                        <div className="title">searched:</div>
                      <div id="moviesSearchedContainer">
                      {this.state.searched.map(v => <Movie  user={user} key = {v.id} movie = {v} tap ={false}/>) }
                      </div>
                    </div>
                )
                :''}
               <div>
                   <br/>
                   <div className="title">Catalog:</div>
               <div id="moviesContainer">
                    {movies.map(v =>
                            <Movie key = {v.id}movie = {v} user={user} tap ={false} addMovieToUser = {this.props.addMovieToUser}/>
                    )}
                </div>
               </div>
            </div>
        )
    }
}

export default Home;