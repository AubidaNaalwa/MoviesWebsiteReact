import React, { Component } from 'react';
import './User.css'
import { BrowserRouter as Router, Route, Link, BrowserRouter} from 'react-router-dom'

class User extends Component{

    logIn = () =>{
        this.props.fun(this.props.name)
    }

     getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

    render(){
        
        return(
            <div  className ="user" style={{ backgroundColor: this.getRandomColor()}} onClick ={this.logIn}>
                {this.props.name}
            </div>
        )
    }
}

export default User;