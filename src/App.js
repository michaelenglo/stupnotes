import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainScreen from './MainScreen.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/root.js';

const store = createStore(rootReducer);
class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <MainScreen />
        </Provider>
      </div>
    );
  }
}

export default App;
