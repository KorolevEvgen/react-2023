import React from 'react';
import './user.css';

export default function User(props) {

    let { item: user } = props; // id,name,status,species,gender,image

    return (<div className={'char'}>
            <img src={user.image} alt={user.name}/>
            <h2>id:{user.id} <br/> name:{user.name}</h2>
            <p>status:{user.status} <br/> species:{user.species}</p>
            <p>gender:{user.gender} </p>
        </div>

    );
};

