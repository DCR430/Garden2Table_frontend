import React, { Component } from 'react'
import VegetableCard from './VegetableCard';

export default class Garden extends Component {



 
    render() {
       
        // let veggie = this.props.veggies.map((vegObj) => <VegetableCard key={vegObj.id} veg={vegObj} clickHandler={this.props.gardenClick}/>)
        return (
            <div>
             
           <h1 class="garden-title">Garden</h1>
           <img  class="img"style={{width: "120px", height: "120px"}} src={this.props.veggies.image} alt={this.props.veggies.name} />
            <p>{this.props.veggies.name}</p>
                
            </div>
        )
    }
}
