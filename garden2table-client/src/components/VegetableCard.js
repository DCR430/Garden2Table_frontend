import React from 'react';

const VegetableCard = props => {
  
    let { image, name, id, push } = props;

    return (
        <div>
           
            <img style={{width: "90px", height: "80px"}} src={image} alt={name} />
            <h3>{name}</h3>
            <button onClick={() => push(`${props.match.path}/${id}`)}>Details!</button>
        </div>
    )
}

export default VegetableCard;