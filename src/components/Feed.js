import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
    return (
        <div className='feed'>
             <StoryReel />
             <MessageSender />
             <Post 
                profilePic="https://i.pinimg.com/474x/1f/41/7e/1f417e7730688591167c71b5c3e6a735.jpg"
                message="Wow! This is working!"
                timestamp="this is the timestamp"
                username="Lana Green"
                image="http://static1.squarespace.com/static/5790cd85f5e23131faaaae42/5790ce34414fb5cf069e50d5/5ae6864803ce64d372f0aee3/1525897839163/art.jpg?format=1500w"
             />
              <Post 
                profilePic="https://i.pinimg.com/474x/1f/41/7e/1f417e7730688591167c71b5c3e6a735.jpg"
                message="Hello! This is a second post!"
                timestamp="this is the timestamp"
                username="Yahya Tahoune"
                image="http://static1.squarespace.com/static/5790cd85f5e23131faaaae42/5790ce34414fb5cf069e50d5/5ae6864803ce64d372f0aee3/1525897839163/art.jpg?format=1500w"
             />
             <Post />
        </div>
    )
}

export default Feed;
