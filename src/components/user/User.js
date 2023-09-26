import React from 'react';

export default function User(props) {

    let { item: user,lift } = props;

    return (<div>
            <h2>{user.id}---{user.name}</h2>
            <p>{user.address.city} <br/> {user.email}</p>
            <button onClick={()=>{
                lift(user);
            }}>details
            </button>
        </div>

    );
};

// така процедура називається statelift
// тому що стан вашого компонента ,який внутрішній
// підіймаєте на рівень вище або на декілька рівнів
