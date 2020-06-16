import React, { Component } from 'react'

const loginURL = 'http://localhost:3000/login'

export default class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = (event) => {
        const {name , value } = event.target

        this.setState({[name]: value})
    }

    handleSubmit = (event) => {
        event.preventDefault()

        fetch(loginURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        }).then(response => response.json())
            .then(result => {
                localStorage.setItem('token', result.token)
            })
    }

    render() {
        const { username, password } = this.state
        return (
            <form className='login' onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    name='username'
                    value={username}
                    placeholder='Username'
                    onChange={this.handleChange}
                />
                <input
                    type='password'
                    name='password'
                    value={password}
                    placeholder='Password'
                    onChange={this.handleChange}
                />
                <input
                    type='submit'
                    value='login'
                />
            </form>
        )
    }

}