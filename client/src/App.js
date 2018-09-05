import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import './App.css';
import NavTab from './components/NavTab/NavTab';

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
                Welcome John!
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
