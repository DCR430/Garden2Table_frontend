import React, { Component } from 'react'

export default class VeggieCard extends Component {
    render() {
        return (
            <div>
                <h4>{this.props.Veggies.name}</h4>
                <img src={this.props.Veggies.image} alt={this.props.Veggies.name}> </img>
                <p>{this.props.Veggies.facts}</p>
                
            </div>
        )
    }
}
