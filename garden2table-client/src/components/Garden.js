import React, { Component } from 'react'
import VegetableCard from './VegetableCard';

export default class Garden extends Component {
    render() {
        let veggie = this.props.veggies.map((vegObj) => <VegetableCard key={vegObj.id} veg={vegObj} clickHandler={this.props.gardenClick} favorite/>)
        return (
            <div>
             
           <h1 class="garden-title">Garden</h1>
                
            </div>
        )
    }
}
