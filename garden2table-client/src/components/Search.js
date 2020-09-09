import React, { Component } from 'react'
import Vegetable from './Vegetable'

export default class Search extends Component {
 
   
        constructor() {
            super();
            this.state = {value: ''}
            console.log('calling search component')
            
        }

        render() {
            // let allVegs = this.filterVeg().map(singleVeg => <Vegetable key={singleVeg.id} singleVeggie={singleVeg} />)
        return (
            <div>
               
                <input value={this.state.value.value} onChange={(e) => {this.props.onChange(e.target.value)}} type="text" placeholder={"Search"}/>

                
            </div>
        )
    }
}