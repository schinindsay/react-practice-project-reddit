import React, { Component } from 'react';

class PostForm extends Component {
  constructor () {
    super()

    this.state = {
      user: '',
      text: ''
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    //whenever handleClick function is invoked -
    //1. create the post object with with user/text properties and values from input
    const post = {
      user: this.state.user,
      text: this.state.text,

    }
    //2. give the created post object reference to the AddPost function in app.js so that addPost on app.js will recieve the properties of the post object and know to invoke addPost and re-render the state.
    this.props.addPost(post);
  }

  render() {
    return (
      <form className="post-form">
        <h3>Add a New Post</h3>

        <div className="form-group">
          <input
            className="form-control"
            placeholder="Post Text"
            value={this.state.user}
            onChange={event => this.setState({user: event.target.value})}
             />

          <br/>

          <input
            className="form-control"
            placeholder="Post User"
            value={this.state.text}
            onChange={event => this.setState({text: event.target.value})}
            />
        </div>

        <button onClick={this.handleClick} type="button" className="btn btn-primary add-post">Post</button>
      </form>
    );
  }
}

export default PostForm;
