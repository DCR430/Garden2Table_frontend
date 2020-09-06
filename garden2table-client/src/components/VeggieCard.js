import React, { Component } from 'react'


export default class VeggieCard extends Component {
    render() {
        return (
            <>
            <div>
                <h4>{this.props.soloVeggie.name}</h4>
                <img style={{width: "90px", height: "80px"}} src={this.props.soloVeggie.image} alt={this.props.soloVeggie.name}/> 
                <p>{this.props.soloVeggie.facts}</p>
                
            </div>
            </>
        )
    }
}
