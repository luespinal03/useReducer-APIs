import React, { useState } from "react";
import "./PostCard.css";
const PostCard = (props) => {
    const [cardSwap, setCardSwap] = useState(false);
    return (
        <div className='post-card'>
            <div className='post-info'>
                <p>
                    post: {props.id} by user# {props.userId}
                </p>
                <h2>{props.title}</h2>
                <p>{props.body}</p>
                <p>Date: {props.date}</p>
                <button>Read more</button>
            </div>
        </div>
    );
};

export default PostCard;