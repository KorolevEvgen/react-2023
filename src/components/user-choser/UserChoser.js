import React, {useEffect, useState} from 'react';
import {getUserAxios} from '../../services/user.api.axios.service';

export default function UserChoser() {
    let [user, setUser] = useState(null);
    let [id,setId] = useState(1);


    const increment = () => {
        id++;
        setId(id);
    };

    const decrement = () => {
        id--;
        setId(id);
    };

    useEffect(() => {
        getUserAxios(id).then(({ data }) => {
            setUser(data);
        });
    }, [id]);
    // deps - в ньому визначаємо об'єкт або масив об'єктів за якими треба слідкувати

    return (
        <div>

            <div>{JSON.stringify(user)}</div>

            <button onClick={() => {
                decrement(id);
            }}>prev
            </button>

            <button onClick={() => {
                increment(id);
            }}>next
            </button>


        </div>
    );
};


