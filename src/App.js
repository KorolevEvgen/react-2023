import './App.css';
import Users from './components/users/Users';
import Posts from './components/posts/Posts';
import {useEffect, useState} from 'react';
import {postService} from './services';

function App() {
    const [posts, setPosts] = useState([]);

    const getUserId = (userId) => {
        postService.getPosts(userId).then(({ data }) => setPosts(data));
    };

    return (
        <div>
            <Users getUserId={getUserId}/>
            <Posts posts={posts}/>
        </div>
    );
}

export default App;


