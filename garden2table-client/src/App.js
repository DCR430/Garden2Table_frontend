import React, { Component } from 'react';
import axios from 'axios'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import './App.css';
import VeggieCard from './components/VeggieCard'
import Veggie from './components/Veggie'
import VeggieContainer from './containers/VeggieContainer';
class App extends Component {
  
    state = { 
      isLoggedIn: false,
      user: {}
     };
  
componentDidMount() {
    this.loginStatus()
  }
loginStatus = () => {
    axios.get('http://localhost:3001/logged_in', {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }
handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }
handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: {}
    })
  }
render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route 
              exact path='/' 
              render={props => (
              <Home {...props} handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
            <Route 
              exact path='/login' 
              render={props => (
              <Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
            <Route 
              exact path='/signup' 
              render={props => (
              <Signup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
              <Route 
              exact path='/veggiecard ' 
              render={props => (
              <VeggieCard {...props}/>
              )}
              />

              <Route 
              exact path='/veggiecontainer' 
              render={props => (
              <VeggieContainer {...props}/>
              )}
              />

               <Route 
              exact path='/veggie/id'
              render={props => (
              <Veggie {...props}/>
              )}
              />
              
              

            
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;