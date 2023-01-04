import React from 'react';
import Post from './Post';

function PostsContainer({user}) {

    console.log(user)
    return (
        <div>
            {user.posts.map((postData) =><Post postData={postData} key={postData.id}/>)}
            
        </div>
    );
}

export default PostsContainer;