import React, { Component } from 'react';

//click on button to pass data to the post-list

const Post = ({post}) => {
  return (
    <div>
    <li>
      <span>{post.user} - {post.text}</span>
    </li>
    <button type="button" className="btn btn-primary up-vote">Up Vote</button>
    <button type="button" className="btn btn-primary down-vote">Down Vote</button>
    </div>
  )
}

export default Post
