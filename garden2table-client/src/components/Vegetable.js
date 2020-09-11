import React, {useState, Component} from 'react';
import VegetablePage from './VegetablePage';
import VegetableCard from './VegetableCard';
import { Route, Switch } from 'react-router-dom'
import Garden from './Garden';

class Vegetable extends Component {
    constructor(props) {
        super(props);
        let { match, veggies, gardenClickHandler,favorite, likedRecipe,likes} = props;
        this.state = {
            gardenVeggies: []
        }

        this.addToGardenArr = this.addToGardenArr.bind(this);
    }

    addToGarden = (veggie) => {
        
        this.state.gardenVeggies.push(veggie);
        // setVeggies(veggie);
        // console.log('setState', setVeggies)
        console.log("clicked",this.state.gardenVeggies)
        console.log("state",this.state)
    }

    addToGardenArr = () => this.state.gardenVeggies;

    render() {
        return (
            <div>
                <div class="veggiecard">

                    {/* <h1>Garden 2 Table</h1>
                    <p>Grow.Harvest.Enjoy</p> */}



                    {/* <Search veggies={this.state.veggies}  /> */}
                    
                    <Switch>
                        <Route 
                            exact path={`${this.props.match.path}`} 
                            render={() => <> {this.props.veggies.map(veg => <VegetableCard addToGarden={this.addToGarden} key={veg.id} {...veg} match={this.props.match} push={this.props.history.push}/>)} </>}
                        />
                        <Route path={`${this.props.match.path}/:id`} render={routerProps => <VegetablePage {...routerProps} veggies={this.props.veggies} likedRecipe={this.props.likedRecipe} liked={this.props.likes} />} />
                    </Switch>
                    </div>
                    <div>
                    <Garden veggies={this.addToGardenArr()}/>
                    veggies: {this.addToGardenArr()[0]}
                    </div>
            </div>
        )
    }
}



export default Vegetable;