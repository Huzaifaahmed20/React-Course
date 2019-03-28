import React from "react";

const Comment = props => {
  const { imageSource, commentDate, commentBody, authorName } = props;
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={imageSource} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {authorName}
        </a>
        <div className="metadata">
          <span className="date">{commentDate}</span>
        </div>
        <div className="text">{commentBody}</div>
      </div>
    </div>
  );
};

export default Comment;
