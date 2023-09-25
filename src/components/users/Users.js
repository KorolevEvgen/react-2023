import React, {useState} from 'react';
import User from '../user/User';

export default function Users() {
    let [users,setUsers] = useState([]);      // функція яка викликає масив [get,set()]
                                                        // get - обєкт, set() - функція;

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(value => {
            setUsers(value);
        });
    return (
        <div>
            {users.map(user => (<User item={user} key={user.id}/>))}
        </div>
    );
};
