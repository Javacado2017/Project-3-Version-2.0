import React from 'react';
import PropTypes from 'prop-types';
import authenticate from '../modules/authenticate';


class LogoutSignOutFunction extends React.Component {

  componentDidMount() {
    // deauthenticate user
    Auth.deauthenticateUser();
    // change the current URL to / after logout
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <p>Signing Out</p>
      </div>
    )
  }
}

SignOut.contextTypes = {
  router: PropTypes.object.isRequired
};

export default SignOut;
