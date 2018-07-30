import React, { Component } from 'react';
import moment from 'moment';
//import './home.css';
import Trends from '../sub-components/Trends';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';

// const config = require('../server/config');
// console.log(config.cryptoAPI)

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
      const { classes } = this.props;
    return (
        <div className="home__content">
            <div className="home__content-main">
                <div className="home__intro row">
                <Typography className="col s6 offset-s3" variant="headline" color='inherit' gutterBottom>
                    Welcome to the BLOCKTRAIN. This is an online educational platform and
                    tool to help students and new investors understand the rapidly evolving
                    world of blockhain technologies and stay informed.
                 </Typography>
                 <div className="home__nav col s6 offset-s3">
                     <Button variant="contained" color="secondary">
                        Get started
                       </Button>
                       <Button variant="contained" color="secondary">
                        View trends
                       </Button>
                       <Button variant="contained" color="secondary">
                        Read news
                       </Button>
                 </div>
                </div>
                <div className="home__card-container row">
                    <div className="col s3">
                        <Trends />
                    </div>
                    <div className="col s3">
                        <Trends />
                    </div>
                    <div className="col s3">
                        <Trends />
                    </div>
                    <div className="col s3">
                        <Trends />
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Home;
