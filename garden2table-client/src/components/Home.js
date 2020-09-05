import React from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import '../App.css';
const Home = (props) => {
const handleClick = () => {
    axios.delete('http://localhost:3001/logout', {withCredentials: true})
    .then(response => {
      props.handleLogout()
      props.history.push('/')
    })
    .catch(error => console.log(error))
  }
return (
   <>
    <div class="title">
        <h1>Garden 2 Table</h1>
        <p>Grow . Harvest. Enjoy</p>
    </div>
    <div class="buttons"> 
        <Link to='/login'><button class="left" >Log In</button></Link>
        <br></br>
        <Link to='/signup'><button class="right">Sign Up</button></Link>
        <br></br>
        { 
         props.loggedInStatus ? 
            <Link to='/logout' onClick={handleClick}>Log Out</Link> : 
         null
        }
    </div>
</>
  );
};
export default Home;
