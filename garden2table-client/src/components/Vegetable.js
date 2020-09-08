import React from 'react';
import VegetablePage from './VegetablePage';
import VegetableCard from './VegetableCard';
import { Route, Switch } from 'react-router-dom'
import Search from './Search';



const Vegetable = props => {
    // console.log(props)
    let { match, veggies} = props;
    const filteredVeggies=()=>{
        return this.props.veggies.filter((singleVeggie)=> singleVeggie.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    }
    return (
                    
        <div>
            <Search/>
            <Switch>
                <Route 
                    exact path={`${match.path}`} 
                    render={() => <> {filteredVeggies.map(veg => <VegetableCard key={veg.id} {...veg} match={props.match} push={props.history.push}/>)} </>}
                />
                <Route path={`${match.path}/:id`} render={routerProps => <VegetablePage {...routerProps} veggies={veggies}/>} />
            </Switch>
        </div>
    )
}

export default Vegetable;