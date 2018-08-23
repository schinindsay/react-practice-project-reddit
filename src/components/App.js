import React, { Component } from 'react';
import PostForm from './post-form';
import PostsList from './posts-list';

//

//App is a component --> has all functionality of React components and we are extending it here
class App extends Component {

  //the constructor defines the initial state of the component each time it is rendered
  //the constructor is also where you can bind events to this (you can also use arrow functions for binding this)
  constructor () {

    // you have to call super inside a constructor if you need to set a property or access this inside the constructor
    //if you need to access the props inside of the constructor, you additionally need to call super with props passed in -- super(props)
    //super lets an object be states
    super()

    //in each newly created instance of App component, extend the component functionality by adding posts property with an empty array as the value
    this.state = {
      posts: []
    }
    //the first this.addPost refers to the addPost function below and since it is done in the constructor 'this' refers to the App class
    //the second this.addPost is also referring to the same addPost 'method' with this referencing App class
    //the final 'this' is the context we are passing to bind
    // in essence, we set the value of addPost equal to the result of calling bind on add post and bind refers to App -->  results in making addPost's context App whenever it is called
    //without the bind, there is a scope problem - invoking a function with 'this' in the global scope returns a reference to the 'window' object and setting a global function to return this but invoking the function in an object doesn't work because objects define their own scope (both return undefined)

    this.addPost = this.addPost.bind(this)
    }

    //addPost is a function that takes is existing posts and adds them to the posts array each time a new instance of App component is rendered (see notes in render portion of App.js and in post-form.js to learn how the addPost function accesses the post input)
    //this is a good example of functional programming because by creating a new empty posts array in an object (which defines its own scope) each time the state changes and then passing in all of the posts (rather than adding a new post to an existing array of posts) the data is immutible -- we are using functions to avoid shared state and mutable data --> concat allows us to build another copy of state and to call setState the the existing posts plus the new posts
    //setState is magical because React knows, when you use setState, to look for a change that happens in reaction to an event and re-render the state

    addPost (post) {
      this.setState({posts: this.state.posts.concat([post])});
    }

    //an example that you don't NEED to have a global scope function with this, but that you do need to bind this in the constructor or through arrow function if you want to reference the component in your function with this
  // handleClick() {
  //   console.log('handling click');
  //   console.log('this in click-handler without bind returns', this); //undefined
  //   this.setState({'state of when clicked'})//undefined
  // }

//render is a function -- returns something..it could return other things -- you could have if(x) return (x stuff) if(y) return (y stuff) in render
  render() {
    // let buttonText = 'Hide Posts';
    // //let postList = <PostList posts = (this.state.post) />
    //
    // if(this.state.showPosts){
    //   buttonText = 'Show Posts'
    // }

    // so that the posts are rendered/accessed in the stateful part of the app, below jsx will essentially tell each instance of the App to recieve the portion of postForm that is set to pass props to the app.js addPost function (see addPost function above in app.js and post-form.js click-handler for more information)
    return (
      <div>
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <div className="page-header">
            <h1>Project Reddit</h1>
          </div>

          <div className="posts">
          </div>

          <PostsList posts={this.state.posts} />

          <PostForm addPost={this.addPost} />
        </div>
        </div>

      </div>
    );
  }
}

export default App;
