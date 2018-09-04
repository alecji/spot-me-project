import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import Home from './pages/Home/Home';
import Callback from './utils/Callback/Callback';
import Auth from './utils/Auth/Auth';
import history from './utils/history';
import Chat from './Chat'

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
      <Router history={history}>
        <div>
          <Route path="/" render={(props) => <App auth={auth} {...props} />} />
          <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />

          <Route exact path="/chat" component={Chat}/>

          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
          
        </div>
      </Router>
  );
}
