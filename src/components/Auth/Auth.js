import React, { Component } from 'react'
import './Auth.css';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Auth extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      user: null
    }
  }

  register = () => {
    const username = this.refs.username.value;
    const password = this.refs.password.value;
    
    axios.post('/api/auth/register', {
      username,
      password
    }).then(response => {
      console.log('new user registered')
      this.setState({ user: response.data })
      this.props.history.push('/dashboard')
    }).catch(error => {
      console.error('Error on register', error)
    })
  }

  handleInputs = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <div className="auth">
        <h1>Helo</h1>
        Username: <input ref="username" name="username" onChange={event => this.handleInputs(event)}></input><br></br>
        Password: <input ref="password" name="password" onChange={event => this.handleInputs(event)}></input><br></br>
        <button>Login</button>
        <button onClick={this.register}>Register</button>
      </div>
    )
  }
}

export default withRouter(Auth);