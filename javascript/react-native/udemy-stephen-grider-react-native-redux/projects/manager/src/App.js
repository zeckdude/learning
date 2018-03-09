import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyDe-dYsa2dttPS2rWZvH756VY2Tlidzq9I',
      authDomain: 'manager-cee5f.firebaseapp.com',
      databaseURL: 'https://manager-cee5f.firebaseio.com',
      projectId: 'manager-cee5f',
      storageBucket: 'manager-cee5f.appspot.com',
      messagingSenderId: '564326149684'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
