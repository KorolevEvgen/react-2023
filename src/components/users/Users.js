import React, {useEffect, useState} from 'react';
import User from '../user/User';
import {getUser, getUsers} from '../../services/user.api.service';
import {getUsersAxios} from '../../services/user.api.axios.service';


export default function Users() {
    let [users, setUsers] = useState([]); // [[],set()]
    let [user, setUser] = useState(null); // null чи {}

    const lift = (obj) => {
        setUser(obj);
    };

    // useEffect – це хук React, який дозволяє синхронізувати компонент із зовнішньою системою.
    // приймає два аргументи callback функцію і deps
    // fetch в середині useEffect відпрацює лише один раз

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(value => value.json())
    //         .then(value => {
    //             setUsers(value);
    //         });
    // }, []);

    useEffect(() => {
        // getUsers().then(value => setUsers(value));

        getUsersAxios().then(value => setUsers(value.data));
    }, []);

    return (
        <div>
            <hr/>
            {/*{user && <div>{JSON.stringify(user)}</div>}*/}
            {/*{user?<div>asdfgh</div>:<div>qwerty</div>}*/}

            {JSON.stringify(user)};

            <hr/>

            {users.map(user => (<User
                item={user}
                key={user.id}
                lift={lift}
            />))}
        </div>
    );
};
