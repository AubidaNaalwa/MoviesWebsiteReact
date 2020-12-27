import React, { Component } from 'react';
import User from './User'
import './User.css'
import { BrowserRouter as Router, Route, Link, BrowserRouter} from 'react-router-dom'

class LogIn extends Component{

    render(){
        const users = this.props.data.users.map(v =>v.name)
        return(
            <div id="logInContainer">
                <div id="LogIn">
                    Who Are you?
                </div>
                <div id="UsersContainer">
                    {users.map(v => <User key = {v} name  = {v} fun = {this.props.loggedInfun}/>)}
                </div>
            </div>
        )
    }
}

export default LogIn;