import React, { Component } from 'react'
import Login from './Login'
import Signup from './Signup'

export default class Authentication extends Component {
    
    render() {
        return (
            <div className='authentication'>
                <p>Log In</p>
                <Login />
                <p>or Sign Up</p>
                <Signup />
            </div>
        )
    }

}