import React, {useEffect, useState} from 'react';

import {userService} from '../../services';
import User from '../user/User';

const Users = ({ getUserId }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(({ data }) => setUsers(data));
    }, []);

    return (
        <div>
            {
                users.map(user => <User key={user.id} user={user} getUserId={getUserId}/>)
            }
        </div>
    );
};

export default Users;