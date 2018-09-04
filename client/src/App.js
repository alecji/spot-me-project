import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import './App.css';
import image from '../public/gym-near.png';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Chat from './Chat';

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
        {/* <Navbar fluid> */}
        {/* <Navbar.Header> */}
        <Navbar.Brand>
          <img src={image} alt="logo" />
          {/* <a href="">Spot Me</a> */}
        </Navbar.Brand>

        

        {/* <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </Button> */}
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
              
            </div>


          )
        }
        {
          isAuthenticated() && (
            <Button
              id="qsLogoutBtn"
              bsStyle="primary"
              className="btn-margin"
              onClick={this.logout.bind(this)}
            >
              Log Out
                  </Button>
          )
        }
        {/* </Navbar.Header> */}
        {/* </Navbar> */}

      {/* <Chat /> */}

      </div>
    );
  }
}

export default App;
