import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

const Post = ({ post }) => {
    let navigate = useNavigate();

    return (
        <div>
            <button onClick={() => {
                navigate(post.id.toString(), { state: { ...post } });
            }
            }>{post.title} </button>

        </div>
    );
};

export default Post;
