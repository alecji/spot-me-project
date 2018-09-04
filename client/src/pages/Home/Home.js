import React, { Component } from 'react';
import './Home.css';
import NavTab from "../../components/NavTab/NavTab"
import Wrapper from "../../components/Wrapper/Wrapper"

class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div >
        {
          isAuthenticated() && (
            <Wrapper>
              <h6>
                Welcome Hank!
              </h6>
            </Wrapper>
                          )
        }
        {
          !isAuthenticated() && (
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
            )
        }
      </div>
    );
  }
}

export default Home;
