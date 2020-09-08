import React, { Component } from 'react'
import Vegetable from './Vegetable'

export default class Search extends Component {
 
   

    


        render() {
            // let allVegs = this.filterVeg().map(singleVeg => <Vegetable key={singleVeg.id} singleVeggie={singleVeg} />)
        return (
            <div>
               
                <input onChange={this.onChange}type="text" placeholder={"Search"}/>

                
            </div>
        )
    }
}