import React from 'react';

const Card = ({name, email, id, image}) => {
    return (
        <div className = 'bg-light-green dib br3 pa3 ma2 grow bws shadow5'>
            <img alt = 'loomian' src = {image} height = '230' width = '220'/>
            <div className = "tc">
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;