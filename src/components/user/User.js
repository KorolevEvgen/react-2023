import React from 'react';

const User = ({ user, showUser }) => {
    return (
        <div>
            <h3>{user.id} -- {user.name}</h3>
            <button onClick={() => showUser(user)}>Get details</button>
        </div>
    );
};

export {User};
