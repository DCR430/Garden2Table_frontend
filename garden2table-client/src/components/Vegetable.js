import React from 'react';
import VegetablePage from './VegetablePage';
import VegetableCard from './VegetableCard';
import { Route, Switch } from 'react-router-dom'
import Garden from './Garden';





const Vegetable = props => {
    let { match, veggies, gardenClickHandler,favorite, likedRecipe,likes} = props;

  

   

    
    return (
        <>            
        <div class="veggiecard">

            {/* <h1>Garden 2 Table</h1>
            <p>Grow.Harvest.Enjoy</p> */}
          
       
    
          {/* <Search veggies={this.state.veggies}  /> */}
              
            <Switch>
                <Route 
                    exact path={`${match.path}`} 
                    render={() => <> {veggies.map(veg => <VegetableCard key={veg.id} {...veg} match={props.match} push={props.history.push}/>)} </>}
                />
                <Route path={`${match.path}/:id`} render={routerProps => <VegetablePage {...routerProps} veggies={veggies} likedRecipe={likedRecipe} liked={likes} />} />
            </Switch>
        </div>
        <div>
              <Garden veggie={props.veggies}/>
        </div>
        <div class="garden">

        </div>

        </>
    )
}

export default Vegetable;