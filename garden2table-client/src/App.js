import React, { Component } from 'react';
import axios from 'axios'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Vegetable from './components/Vegetable';
// import VegetablePage from './components/VegetablePage';
import Search from './components/Search';

import './App.css';
import VegetableCard from './components/VegetableCard';


class App extends Component {
    allVegies;

    state = { 
      isLoggedIn: false,
      user: {},
      veggies:[],
      searchTerm:""
     };
  
componentDidMount() {
    this.loginStatus()
    
  }

  componentWillMount(){
    this.getVeggies()

  }

  getVeggies=()=>{
    fetch('http://localhost:3001/vegetables').then(r => r.json()).then(veg => {
      this.allVeggies = veg;
      return this.setState({veggies : veg})
    })
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

  filteredVeggies = (event) => {
   
    let filtered = [...this.state.veggies].filter((veggie) => {
      return veggie.name.toLowerCase().includes(event.toLowerCase());
    })
    this.setState({veggies: event.length === 0 ? this.allVeggies : filtered})
  }


render() {
  
    return (
      <div>
         <Search onChange={this.filteredVeggies} veggies={this.state.veggies}  />
       
        <BrowserRouter>
          <Switch>
            <Route exact path='/'  render={props => (<Home {...props} handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn}/>)}/>
            <Route exact path='/login' render={props => ( <Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>)}/>
            <Route exact path='/signup' render={props => (<Signup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>)}/>
            <Route  path='/vegetable' render={(routerProps) => <Vegetable veggies={this.state.veggies} {...routerProps}/>}/>
            {/* <Route exact path='/vegetable/:id' render={props => (<VegetablePage {...props}/>)}/> */}
         </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;