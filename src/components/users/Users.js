import React, {useState} from 'react';
import User from '../user/User';

export default function Users() {
    let [users,setUsers] = useState([]);

    fetch('https://rickandmortyapi.com/api/character')
        .then(value => value.json())
        .then(value => {
                setUsers(value.results.splice(0,6));
        });
    return (
        <div>
            {users.map(user => (<User item={user} key={user.id}/>))}
        </div>
    );
};
