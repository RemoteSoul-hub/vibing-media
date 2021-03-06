import React from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import NearMeIcon from '@material-ui/icons/NearMe';

function Post({profilePic, image, username, day, timestamp, message}) {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic} className="post__avatar" />
                <div className="post__topInfo">
                    <h2>The {new Date(day?.toDate()).getDate()}th</h2>
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>
            <div className="post__bottom">
                <p>{message}</p>
            </div>
            <div className="post__image">
                <img src={image} alt="" />
            </div>
            <div className="post__options">
                <div className="post__option">
                    <WhatshotIcon style={{ color: "orange"}}/>
                    <p>6.9K</p>
                 </div>
                 <div className="post__option">
                    <NearMeIcon style={{color: "royalblue"}}/>
                    <p>588</p>
                </div>
            </div>
        </div>
    )
}

export default Post;
