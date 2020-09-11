import React, { Component } from 'react'
import VegetableCard from './VegetableCard';

export default class Garden extends Component {



 
    render() {
        console.log(this.props.veggies)
       
        // let veggie = this.props.veggies.map((vegObj) => <VegetableCard key={vegObj.id} veg={vegObj} clickHandler={this.props.gardenClick}/>)
        return (
            <div>
             
           {/* <h1 class="garden-title">Garden</h1>
           <img  class="img"style={{width: "120px", height: "120px"}} src={this.props.veggies.image} alt={this.props.veggies.name} /> */}
            {<div>{this.props.veggies.map ((veggie,index) => <div key={index}>{ <img class="img" style={{width: "120px", height: "120px"}} src={veggie.image} />}</div>)}</div>}
            {<div>{this.props.veggies.map ((veggie,index) => <div key={index}>{ veggie.name}</div>)}</div>}

            
                
            </div>
        )
    }
}
