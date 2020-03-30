import React from 'react';
import './App.css';

import { Provider } from 'react-redux';
//import { createStore, applyMiddleware } from 'redux';

import Posts from './Components/Posts';
import PostForm from './Components/PostForm';

import Store from './Store';

//const store = createStore(() => [], {}, applyMiddleware());

function App() {
  return (
    <Provider store={Store}>
      <div className='App'>
        <PostForm />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
