import React, { Component } from 'react';
import { Navbar, Button, Jumbotron,Carousel } from 'react-bootstrap';
import './App.css';
import image from '../public/gym-near.png';
// import Jumbotron from './components/Jumbotron/Jumbotron';
import Chat from './Chat';
import Login from './components/Login/Login';
import NavTab from './components/NavTab/NavTab';
import Wrapper from './components/Wrapper/Wrapper';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      
      <div>
      
      {/* <Jumbotron classID="jumbo">
        <h1>hi</h1>
      </Jumbotron> */}
        {
          !isAuthenticated() && (
            <div>
            <Button
                id="qsLoginBtn"
                bsStyle="primary"
                className="btn-margin"
                onClick={this.login.bind(this)}
              >
                Log In
              </Button>
              <h4>
                You are not logged in! Please{' '}
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={this.login.bind(this)}
                >
                  Log In
                </a>
                {' '}to continue.
              </h4>
            </div>
          )
        }
        {
          isAuthenticated() && (
            <div>
            <NavTab/>
              <Button
                id="qsLogoutBtn"
                bsStyle="primary"
                onClick={this.logout.bind(this)}
              >
                Log Out
            </Button>
              <h6 id="user">
                Welcome Hank!
              </h6>
            </div>
          )
        }

 {/* <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'chat')}
            >
              chat me
        </Button> */}
        {/* <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </Button> */}
      </div>
    );
  }
}

export default App;
