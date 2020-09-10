import React from 'react';
import { Button } from 'semantic-ui-react'

const VegetableCard = props => {
  
    let { image, name, id, push } = props;

    return (
        <div>
           
            <img  class="img"style={{width: "100px", height: "100px"}} src={image} alt={name} />
            <p>{name}</p>
        <button size="tiny" class="ui button" onClick={() => push(`${props.match.path}/${id}`)}>Details!</button>
        <button size="tiny" class="ui button">Add to Garden!</button>
        </div> 
    )
}

export default VegetableCard;