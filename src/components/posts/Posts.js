import React from 'react';
import Post from '../post/Post';

const Posts = ({ posts }) => {

    return (
        <div>
            {
                posts.map(post => <Post ket={post.id} post={post}/>)
            }
        </div>
    );
};

export default Posts;
