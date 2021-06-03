import React, {  useState } from 'react';
import './MessageSender.css';
import { Avatar } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';

function MessageSender() {
    const [input, setInput] = useState('');
    const [imgURL, setImgURL] = useState('');
    const handleSubmit = e => {
        e.preventDefault();

        // database
        setInput("");
        setImgURL("");
    }
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <form>
                    <input 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    type="text" placeholder="Hey, what are you vibing to?"/>
                    <Avatar />
                    <input 
                    value={imgURL}
                    onChange={(e) => setImgURL(e.target.value)}
                    type="text" placeholder="Image URL (Optional)"/>
                    <button onClick={handleSubmit} type="submit">
                        Hidden Submit
                    </button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <CreateIcon style={{ color: "green"}} />
                    <h3>Post a Blog</h3>
                </div>
            <div className="messageSender__option">
                    <FileCopyIcon style={{color: "blue"}} />
                    <h3>Upload File</h3>
            </div>
            <div className="messageSender__option">
                    <SentimentVerySatisfiedIcon style={{color: "orange"}} />
                    <h3>Vibe / Activity</h3>
            </div>
            </div>
        </div>
    )
}

export default MessageSender;
