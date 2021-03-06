import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
// import './App.css';
class Signup extends Component {
  
    state = { 
      username: '',
      password: '',
      password_confirmation: '',
      errors: ''
     };

     componentWillMount() {
        return this.props.loggedInStatus ? this.redirect() : null
      }

handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };
handleSubmit = (event) => {
    event.preventDefault()
    const {username, password, password_confirmation} = this.state
    let user = {
      username: username,
      password: password,
      password_confirmation: password_confirmation
    }
axios.post('http://localhost:3001/users', {user}, {withCredentials: true})
    .then(response => {
      if (response.data.status === 'created') {
        this.props.handleLogin(response.data)
        this.redirect()
      } else {
        this.setState({
          errors: response.data.errors
        })
      }
    })
    .catch(error => console.log('api errors:', error))
  };
redirect = () => {
    this.props.history.push('/')
  }

  handleErrors = () => {
    return (
      <div>
        <ul>{this.state.errors.map((error) => {
          return <li key={error}>{error}</li>
        })}
        </ul> 
      </div>
    )
  }

render() {
    const {username, password, password_confirmation} = this.state
return (
  <div class="login">
      <div class="title">
        <h1>Sign Up</h1>
       <form  class="signup-form" onSubmit={this.handleSubmit}>
          <input
            placeholder="username"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <input 
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <input
            placeholder="password confirmation"
            type="password"
            name="password_confirmation"
            value={password_confirmation}
            onChange={this.handleChange}
          />
        
          <Link to="/"><button placeholder="submit" type="submit">Sign Up</button></Link>
      
        </form>
        <div>
          {
            this.state.errors ? this.handleErrors() : null
          }
        </div>
      </div>
     </div>
    );
  }
}
export default Signup;