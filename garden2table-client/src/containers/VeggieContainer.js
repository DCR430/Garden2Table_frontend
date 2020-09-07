import React, { Component } from 'react'
import VeggieCard from '../components/VeggieCard'
import Search from '../components/Search'
// import Veggie from '../components/Veggie'

export default class VeggieContainer extends Component {

    state={
        veggiesArray: [],
        searchTerm : "",
        // veggie: ""
    }

    componentDidMount(){
        this.getVeggies()

    }
    
    // componentDidMount(){
        
    //     this.getSoloVeggie()
    // }

    
    getVeggies=()=>{
    fetch('http://localhost:3001/vegetables')
    .then(resp => resp.json())
    .then(veggies => this.setState({veggiesArray: veggies}))
    }

   
   
    // getSoloVeggie=()=>{
    //     fetch(`http://localhost:3001/vegetables/82`)
    //     .then(resp => resp.json())
    //     .then(singleVeggie => console.log(singleVeggie) )
    // }

    // this.setState({veggie: singleVeggie})
   
   
    filteredVeggies=()=>{
        return this.state.veggiesArray.filter((singleVeggie)=> singleVeggie.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    }

    onChange=(e)=>{
        this.setState({searchTerm:e.target.value})
    }



    render() {
        let veggieCard = this.filteredVeggies().map(soloVeggie => <VeggieCard key={soloVeggie.id} soloVeggie={soloVeggie}/>)
        console.log(this.state.veggie)
        // let veggie = this.getSoloVeggie(oneVeggie => console.log(oneVeggie))
        // <Veggie key={singleVeggie.id} oneVeggie={singleVeggie}/>
        return (
            <div>
                {/* {veggie}  */}
                <Search value={this.state.searchTerm} onChange={this.onChange}/>
               {veggieCard}
            </div>
        )
    }
}
