import React, { Component } from 'react'
import VegetableCard from './VegetableCard';

export default class Garden extends Component {



 
    render() {
        // console.log(this.props.veggies)
       
        // let veggie = this.props.veggies.map((vegObj) => <VegetableCard key={vegObj.id} veg={vegObj} clickHandler={this.props.gardenClick}/>)
        return (
            <>
            <div>
                <h1 class="garden-title">Garden</h1> 

            </div>
            <div class="veggie">
            {this.props.veggies.map ((veggie,index) => 
            <div key={index}>
            { <img class="img" style={{width: "150px", height: "150px"}} src={veggie.image} />}
            <h1>{ veggie.name}</h1>
            {/* <button class="ui black basic button" onClick={()=>this.props.addToGarden()}>Add to Garden!</button> */}

            
            </div>)}
             
           {/* <img  class="img"style={{width: "120px", height: "120px"}} src={this.props.veggies.image} alt={this.props.veggies.name} /> */}
            {/* {<h1>{this.props.veggies.map ((veggie,index) => <div key={index}>{ veggie.name}</div>)}</h1>} */}

            
                
            </div>
        </>
        )
    }
}
