import React from 'react';
import VegetablePage from './VegetablePage';
import VegetableCard from './VegetableCard';
import { Route, Switch } from 'react-router-dom'

const Vegetable = props => {
    // console.log(props)
    let { match, veggies} = props;
    return (
        <div>
            <Switch>
                <Route 
                    exact path={`${match.path}`} 
                    render={() => <> {veggies.map(veg => <VegetableCard key={veg.id} {...veg} match={props.match} push={props.history.push}/>)} </>}
                />
                <Route path={`${match.path}/:id`} render={routerProps => <VegetablePage {...routerProps} veggies={veggies}/>} />
            </Switch>
        </div>
    )
}

export default Vegetable;