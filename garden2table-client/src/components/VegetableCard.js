import React from 'react';

const VegetableCard = props => {
    console.log(props)
    let { image, name, id, push } = props;

    return (
        <div>
            <h3>'Im here'</h3>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <button onClick={() => push(`${props.match.path}/${id}`)}>Details!</button>
        </div>
    )
}

export default VegetableCard;