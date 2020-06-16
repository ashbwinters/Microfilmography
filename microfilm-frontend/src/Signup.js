import React, { Component } from 'react'

const usersURL = 'http://localhost:3000/users'

export default class Signup extends Component {
    state = {
        username: '',
        password: '',
        email: ''
    }

    handleChange = (event) => {
        const {name , value } = event.target

        this.setState({[name]: value})
    }

    handleSubmit = (event) => {
        event.preventDefault()

        fetch(usersURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ user: this.state })
        }).then(response => response.json())
            .then(result => {
                localStorage.setItem('token', result.token)
            })
    }

    render() {
        const { username, password, email } = this.state
        return (
            <form className='signup' onSubmit={this.handleSubmit}>
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
                    type='email'
                    name='email'
                    value={email}
                    placeholder='email'
                    onChange={this.handleChange}
                />
                <input
                    type='submit'
                    value='Sign up'
                />
            </form>
        )
    }

}