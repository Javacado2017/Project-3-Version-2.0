import React from 'react';
import Auth from '../modules/Auth';
import DashboardUserWidget from '../components/DashboardUserWidget.js';


class Dashboard extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      secretData: '',
      user: {}
    };
  }


  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/dashboard');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
          secretData: xhr.response.message,
          user: xhr.response.user
        });
      }
    });
    xhr.send();
  }


  render() {
    return (<DashboardUserWidget secretData={this.state.secretData} user={this.state.user}/>);
  }

}

export default Dashboard;
