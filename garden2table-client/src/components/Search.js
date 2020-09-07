import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div>
               
                <input onChange={this.props.onChange}type="text" placeholder={"Search"}/>

                
            </div>
        )
    }
}
