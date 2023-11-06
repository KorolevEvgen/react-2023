import React, {useState} from 'react';
import {useEffect} from 'react';
import {Outlet} from 'react-router-dom';


import Post from '../post/Post';

const Posts = () => {
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setPosts([...value]);

            });
    }, []);

    return (

        <div>
            <Outlet/>
            {
                posts.map(value => <Post key={value.id} post={value}/>)
            }
        </div>
    );
};

export default Posts;
