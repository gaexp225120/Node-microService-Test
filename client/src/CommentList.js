import React from "react";

export default ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    return (
      <li key={comment.id}>
        {comment.status === "rejected"
          ? `this comment has been ${comment.status}`
          : comment.content && comment.status === "pending"
          ? `this comment is waiting for moderation`
          : comment.content}
      </li>
    );
  });

  return <ul>{renderedComments}</ul>;
};
