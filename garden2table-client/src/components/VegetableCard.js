import React from 'react';
import { Button } from 'semantic-ui-react'

const VegetableCard = props => {
  
    let { image, name, id, push } = props;

    return (
        <div>
           
            <img  class="img"style={{width: "120px", height: "120px"}} src={image} alt={name} />
            <p>{name}</p>
        <button class="ui black basic button" onClick={() => push(`${props.match.path}/${id}`)}>Recipes!</button>
        <button class="ui black basic button" onClick={()=>props.addToGarden(props)}>Add to Garden!</button>
        </div> 
    )
}

export default VegetableCard;