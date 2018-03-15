import React, { Component } from 'react';
import './styles/reset.css';
import './App.css';
import PhotoFeed from './components/photoFeed';
// import Modal from './components/modal';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
            <PhotoFeed/>
      </Provider>
    );
  }
}

export default App;
