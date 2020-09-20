import React from 'react';


const CommentDetail = ({ author, timeAgo, imageUrl, children }) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img src={imageUrl} alt="avatar" />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {author}
                </a>
                <div className="metadata">
                    <span className="date">{timeAgo}</span>
                </div>
                <div className="text">{children}</div>
            </div>
        </div>
    );

}

export default CommentDetail;