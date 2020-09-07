import React, { Component } from 'react'
import VeggieCard from '../components/VeggieCard'
import Search from '../components/Search'

export default class VeggieContainer extends Component {

    state={
        veggiesArray: [],
        searchTerm : ""
    }

    componentDidMount(){
        this.getVeggies()
    }

    
    getVeggies=()=>{
    fetch('http://localhost:3001/vegetables')
    .then(resp => resp.json())
    .then(veggies => this.setState({veggiesArray: veggies}))
    }

   
   
    // getSoloVeggie=()=>{
    //     fetch(`http://localhost:3001/vegetables/${vegetable.id}`)
    //     .then(resp => resp.json())
    //     .then(singleVeggie => this.setState({veggie: singleVeggie}))
    //     }

   
   
   
     filteredVeggies=()=>{
        return this.state.veggiesArray.filter((singleVeggie)=> singleVeggie.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    }

    onChange=(e)=>{
        this.setState({searchTerm:e.target.value})
    }



render() {
        let veggieCard = this.filteredVeggies().map(soloVeggie => <VeggieCard key={soloVeggie.id} soloVeggie={soloVeggie}/>)
        return (
            <div>
                <Search value={this.state.searchTerm} onChange={this.onChange}/>
               {veggieCard}
            </div>
        )
    }
}
