import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { configureStore } from '../Store';
import Navbar from '../view/TopNavBar/Navbar';
import Routes from './Routes'
import Footer from '../view/Footer/footer'
import CssBaseline from '@material-ui/core/CssBaseline';

import './App.css';
import { setAuthorizationToken, setCurrentUser } from '../Store/Action/auth';
import jwtDecode from 'jwt-decode';

const store = configureStore()
// Authentication 
// if(localStorage.jwtToken){
//   setAuthorizationToken(localStorage.jwtToken);
//   //prevent someone from manually tempering with the key of jwtToken in localstorage
//   try{
//     store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)))
//   }catch(e){
//     store.dispatch(setCurrentUser({}));
//   }
// }

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <CssBaseline />
          <Navbar />
          <Routes />
        </Router>
        <Footer className="footer" />
      </Provider>  
    </div>
  );
}

export default App;
