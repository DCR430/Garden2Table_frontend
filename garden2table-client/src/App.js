import React, { Component } from 'react';
import axios from 'axios'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Vegetable from './components/Vegetable';
// import VegetablePage from './components/VegetablePage';
import Search from './components/Search';
import { Container } from 'semantic-ui-react';
import Garden from './components/Garden';



import './App.css';
// import VegetableCard from './components/VegetableCard';


class App extends Component {
    allVegies;

    state = { 
      isLoggedIn: false,
      user: {},
      veggies:[],
      favorite: false,
      likes: 0
     };
  
componentDidMount() {
    this.loginStatus()
    
  }

  componentWillMount(){
    this.getVeggies()

  }

  getVeggies=()=>{
    fetch('http://localhost:3000/vegetable').then(r => r.json()).then(veg => {
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

  favoriteClickHandler = (id) => {
    let newArray = [...this.state.veggies]
    let foundObj = newArray.find((vegObj) => vegObj.id === id)
    foundObj.favorite = true

    this.setState({ veggies: newArray })

  }

  likesHandler = (vegId, likes) => {
    let updatedLike = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        likes: likes + 1
      })
    }
    fetch(`http://localhost:3000/vegetable/${vegId}`, updatedLike)
    .then(resp => resp.json())
    .then(newLikes => {
      let newLikesArray = this.state.veggies.map(veg => {
        if(veg.id === vegId) {
          return newLikes
        }
        return veg
      })
      this.setState({veggies: newLikesArray })
    })
  }


render() {
  
    return (
       
      <div>
         <Search onChange={this.filteredVeggies} veggies={this.state.veggies}  />
       
        <BrowserRouter>
            {/* <Search onChange={this.filteredVeggies} veggies={this.state.veggies}  /> */}
          <Switch>
            <Route exact path='/'  render={props => (<Home {...props} handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn}/>)}/>
            <Route exact path='/login' render={props => ( <Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>)}/>
            <Route exact path='/signup' render={props => (<Signup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>)}/>
            <Route  path='/vegetable' render={(routerProps) => <Vegetable veggies={this.state.veggies} gardenClickHandler={this.favoriteClickHandler} likedRecipe={this.likesHandler} favorite={this.state.favorite} likes={this.state.likes}{...routerProps}/>}/>
            {/* <Route exact path='/vegetable/:id' render={props => (<VegetablePage {...props}/>)}/> */}
            {/* <Garden veggies={veggies} gardenClick={gardenClickHandler}/> */}
            {/* <Garden veggies={this.state.veggies}/> */}
         </Switch>
        </BrowserRouter>
      </div>
  
    );
  }
}
export default App;