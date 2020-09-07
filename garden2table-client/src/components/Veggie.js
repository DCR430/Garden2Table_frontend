import React, { Component } from 'react'

export default class Veggie extends Component {

    state ={
        veggie:{}
    }

    componentDidMount(){
        this.getSoloVeggie
    }
    
    getSoloVeggie=(id)=>{
        fetch(`http://localhost:3001/vegetables/${id}`)
        .then(resp => resp.json())
        .then(singleVeggie => this.setState({veggie: singleVeggie}))
        }

    
    
    render() {
        return (
            <div>
                <h3>{this.state.veggie.name}</h3>
                <img style={{width: "90px", height: "80px"}} src={this.state.veggie.image} alt={this.state.veggie.name}/>
                <p>{this.state.veggie.facts}</p>
            </div>
        )
    }
}
