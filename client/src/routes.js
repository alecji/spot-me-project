import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import Callback from './utils/Callback/Callback';
import Auth from './utils/Auth/Auth';
import history from './utils/history';
// import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Chat from './Chat'
import Blog from './pages/Blog/Blog';


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
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          {/* <Route path="/home" render={(props) => <Home auth={auth} {...props} />} /> */}
          <Route exact path="/chat" component={Chat} />
          <Route path="/blog" component={Blog} />


          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
          
        </div>
      </Router>
  );
}
