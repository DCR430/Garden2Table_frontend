import React from 'react';
import VegetablePage from './VegetablePage';
import VegetableCard from './VegetableCard';
import { Route, Switch } from 'react-router-dom'
import Garden from './Garden';





const Vegetable = props => {
    let { match, veggies, gardenClickHandler} = props;

  

   

    
    return (
        <>            
        <div class="veggiecard">

            {/* <h1>Garden 2 Table</h1>
            <p>Grow.Harvest.Enjoy</p> */}
          
       
    
          {/* <Search veggies={this.state.veggies}  /> */}
              
            <Switch>
                <Route 
                    exact path={`${match.path}`} 
                    render={() => <> {veggies.map(veg => <VegetableCard key={veg.id} {...veg} match={props.match} push={props.history.push} />)} </>}
                />
                <Route path={`${match.path}/:id`} render={routerProps => <VegetablePage {...routerProps} veggies={veggies}/>} />
            </Switch>
        </div>
        <div>
              <Garden veggies={veggies} gardenClick={gardenClickHandler}/>
        </div>
        <div class="garden">

        </div>

        </>
    )
}

export default Vegetable;