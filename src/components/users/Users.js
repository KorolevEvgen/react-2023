import {useEffect, useState} from 'react';

import './users.css';

import {userService} from '../../services';
import {User} from '../user/User';
import {UserDetails} from '../user-details/UserDetails';

const Users = () => {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);

    const showUser = (obj) => {
        setUser(obj);
    };

    useEffect(() => {
        userService.getAll().then(value => setUsers(value.data));

    }, []);

    return (
        <div className={'usersBlock'}>
            <div>
                {
                    users.map(user => <User key={user.id} user={user} showUser={showUser}/>)
                }
            </div>
            <div>
                {
                    user && <UserDetails key={user.id} user={user}/>
                }
            </div>
        </div>
    );
};


export {Users};
