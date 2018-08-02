import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography } from "@material-ui/core/";
import Charts from '../containers/Charts.js';


const Dashboard = ({ secretData, user }) => (
  <Card className="container">
    <CardContent>
    <Typography gutterBottom variant="headline" component="h2">
            WELLCOME TO YOUR DASHBOARD
            {secretData && <Typography style={{ fontSize: '16px', color: 'green' }}><strong>{user.name}</strong>!<br />{secretData}</Typography>}    
    </Typography>
    <Charts/>   
    </CardContent>
    
 </Card>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
