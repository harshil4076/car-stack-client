import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { configureStore } from '../Store';
import Navbar from './Navbar';
import Main from './Main'

import CssBaseline from '@material-ui/core/CssBaseline';

import './App.css';
import { setAuthorizationToken, setCurrentUser } from '../Store/Action/auth';
import jwtDecode from 'jwt-decode';

const store = configureStore()
if(localStorage.jwtToken){
  setAuthorizationToken(localStorage.jwtToken);
  //prevent someone from manually tempering with the key of jwtToken in localstorage
  try{
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)))
  }catch(e){
    store.dispatch(setCurrentUser({}));
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <CssBaseline />
        <Navbar />
        <Main />
      </Router>
    </Provider>
  );
}

export default App;
