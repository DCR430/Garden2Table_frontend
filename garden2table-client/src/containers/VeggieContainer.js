import React, { Component } from 'react'
import VeggieCard from '../components/VeggieCard'

export default class VeggieContainer extends Component {

    state={
        veggiesArray=[]
    }

    componentDidMount(){
        this.getVeggies
    }
    
    getVeggies=()=>
    fetch('http://localhost:3000/vegetables')
    .then(resp => resp.json())
    .then(veggies => this.setState({veggiesArray: veggies}))
    
    
    render() {
        return (
            <div>
                <VeggieCard Veggies={this.state.veggiesArray}/>
            </div>
        )
    }
}
