import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from 'react-router-dom';

const PostDetails = () => {
    // let { state:post } = useLocation();
    let {id} = useParams();
    let [post,setPost] = useState();

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/'+id)
            .then(value => value.json())
            .then(value => {
                setPost({...value});

            });
    },[id])

    return (
        <div>
            {
                JSON.stringify(post)
            }
        </div>
    );
};

export default PostDetails;
