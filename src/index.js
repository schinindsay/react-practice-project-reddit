import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import PostForm from './components/post-form.js';
import PostsList from './components/posts-list.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
