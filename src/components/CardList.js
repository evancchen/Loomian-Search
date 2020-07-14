import React from 'react';
import Card from './Card';
// import loomians from './loomians';

const CardList = ({loomians}) => {
    return ( 
        loomians.map((user, i) => {
            return( 
               <Card
               key = {i}
               id = {user.id}
               name = {user.name} 
               email = {user.email} 
               image = {user.image}
               />
            );
        })
    );
}

export default CardList;