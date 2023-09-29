import React from 'react';

const UserDetails = ({ user }) => {
    return (
        <div>
            <h3>{user.name}</h3>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.address.street}</p>
            <p>{user.address.suite}</p>
            <p>{user.address.city}</p>
        </div>
    );
};

export {UserDetails};
