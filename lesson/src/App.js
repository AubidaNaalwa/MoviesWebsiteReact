import logo from './logo.svg';
import './App.css';
import Movie from './components/Movie'
import React, { Component } from 'react';
import Home from './components/Home'
import LogIn from './components/LogIn'
import { BrowserRouter as Router, Route} from 'react-router-dom'



class App extends  Component {
  constructor(){
    super()
    this.state ={
      movies:[
        { id: 0, isRented: false, title: "Tarzan", year: 1999, img: "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811", descrShort: "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out." },
        { id: 1, isRented: false, title: "The Lion King", img: "https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg", year: 1994, descrShort: "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies." },
        { id: 2, isRented: false, title: "Beauty and the Beast", year: 1991, img: "https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg", descrShort: "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself." },
        { id: 3, isRented: false, title: "The Sword in the Stone", year: 1963, img: "https://www.disneyinfo.nl/images/laserdiscs/229-1-AS-front.jpg", descrShort: "Arthur is a young boy who just wants to be a knight's squire. Alas, he is dubbed 'Wart' early on, and it was all downhill from there for a while. On a hunting trip he falls in on Merlin, literally. Merlin is a possibly-mentally-unstable-and-ethically-dubious Wizard that turns Arthur into a literate, at-one-point harassed squirrel. Watch to find out what the heck that means." },
        { id: 4, isRented: false, title: "Beauty and the Beast", year: 2016, img: "https://images-na.ssl-images-amazon.com/images/I/51ArFYSFGJL.jpg", descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation." }
      ],
      users:[
        {name:"Aubida Naalwa",color:"red", pudget:2000},
        {name :"Alaa Naalwa",color:"blue",pudget:2000},
        {name:"Noor Masarwe",color:"green",pudget:2000},
        {name:"Amro Habib",color:"white",pudget:2000}
      ],
      loggedIn:false,
      currentUser:0
    }


  }

  setUserLoggedIn = (userName) => {
    const index = this.state.users.findIndex(v => v.name == userName)
    this.setState({
      loggedIn:true,
      currentUser:index
    })
  }

  removeFromRent =(user, movie)=>{
    if(!user || !user.name || movie == undefined){
      return
    }
    let users = [...this.state.users]
    const userFound ={...this.state.users.find(v => user.name == v.name )}
    if(!userFound || userFound["movies"] == undefined){
      return
    }
    
  userFound["movies"].splice(userFound["movies"].findIndex(v => v.id == movie.id), 1)
  users[userFound.id] = userFound
  this.setState({
    users
  })
   
  }


  addMovieToUser=(user, movie)=>{
    if(!user || !user.name  || movie == undefined){
      return
    }
    let users = [...this.state.users]
    const userFound ={...this.state.users.find(v => user.name == v.name )}
    if(!userFound){
      return
    }
    if(userFound["movies"] == undefined){
      userFound["movies"] = []
    }else{

      if(userFound["movies"].find(v => v.id == movie.id)){
        return
      } 
    }
    userFound["movies"].push(movie)
    let updateUser = users.findIndex(v => user.name == v.name) 
    users[updateUser] = userFound
   this.setState({
     users
   })
  }

  render (){
    return (
    <Router>
      <Route path ="/" exact>
          {this.state.loggedIn 
          ?
          <Home data = {this.state}  addMovieToUser={this.addMovieToUser} removeFromRent={this.removeFromRent}/> 
          :
          <LogIn data = {this.state} loggedInfun ={this.setUserLoggedIn}/>}
      </Route>
      <Route path ="/catalog" exact render ={() => <Home  data = {this.state} addMovieToUser={this.addMovieToUser} removeFromRent={this.removeFromRent}/>}></Route>
      <Route path ='/movies/:id' exact render ={({match}) =>(parseInt(match.params.id) < this.state.movies.length &&match.params.id >=0 ) ?<Movie key = {parseInt(match.params.id) }movie ={ this.state.movies[parseInt(match.params.id) ]}  tap = {true}/>:''}></Route>
   </Router>
  );
  }
}

export default App;
