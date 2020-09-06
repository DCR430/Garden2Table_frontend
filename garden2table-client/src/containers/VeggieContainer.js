import React, { Component } from 'react'
import VeggieCard from '../components/VeggieCard'

export default class VeggieContainer extends Component {

    state={
        veggiesArray: []
    }

    componentDidMount(){
        this.getVeggies()
    }

    
    getVeggies=()=>{
    fetch('http://localhost:3001/vegetables')
    .then(resp => resp.json())
    .then(veggies => this.setState({veggiesArray: veggies}))
    
    
}





render() {
        let veggieCard = this.state.veggiesArray.map(soloVeggie => <VeggieCard key={soloVeggie.id} soloVeggie={soloVeggie}/>)
        return (
            <div>
               {veggieCard}
            </div>
        )
    }
}
