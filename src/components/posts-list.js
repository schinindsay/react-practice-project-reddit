import React from 'react'
import Post from './post';

//****click on list to update the app

const PostsList = (props) => {


  const postItems = props.posts.map((post, index) => {
    return (
      //key isn't cumpulsory but you will get a warning if you don't use it because you should have an index for array that has unique ids
      <Post key={index} post={post} />
    )
  })

  return (
    <ul className='col-md-4 list-group'>
      {postItems}
    </ul>
  )
}

export default PostsList
