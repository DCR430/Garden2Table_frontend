import React from 'react';

class VegetablePage extends React.Component {
    state = {
        displayVeggie: null
    }

    componentDidMount(){
    fetch('http://localhost:3000/vegetable')
    .then(r => r.json())
    .then(veg => this.setState({displayVeggie : veg}))
    }

    
    render(){
        let veggieId = this.props.match.params.id // a string of the id from the url bar 
        
        //
        let veggieToDisplay = this.props.veggies.find(veg => veg.id === parseInt(veggieId))
        // console.log(petToDisplay)
        console.log(veggieToDisplay)
        return (
            <div>
                {veggieToDisplay 
        
                    ? (
                        < div class="card">
                            <h1>{veggieToDisplay.name}</h1>
                            <img style={{width: "200px", height:"100px"}} src={veggieToDisplay.image} alt={veggieToDisplay.name} />
                            <br></br>
                            <h3>Nutritional Facts</h3>
                            <h5>{veggieToDisplay.facts}</h5>
                            <div>{veggieToDisplay.recipes[0].title}</div>
                            <div>{veggieToDisplay.recipes[0].ingredients}</div>
                            <div>{veggieToDisplay.recipes[0].instructions}</div>
                            <div>{veggieToDisplay.recipes[1].title}</div>
                            <div>{veggieToDisplay.recipes[1].ingredients}</div>
                            <div>{veggieToDisplay.recipes[1].instructions}</div>
                        </div>
                    ) : (
                        <div>Loading</div>
                    )
                }
            </div>
        )
    }

}

export default VegetablePage;