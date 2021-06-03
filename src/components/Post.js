import React from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';

function Post({profilePic, image, username, day, timestamp, message}) {
    return (
        <div className="post">
            <div className="post__left">
                <Avatar src={profilePic} className="post__avatar" />
                <div className="post__topInfo">
                    <h2>Day 08</h2>
                    <h3>{username}</h3>
                    <p>Timestamp...</p>
                </div>
            </div>
            <div className="post__right">
                <p>{message}</p>
            </div>
            <div className="post__image">
                <img src="" alt="" />
            </div>
        </div>
    )
}

export default Post;
