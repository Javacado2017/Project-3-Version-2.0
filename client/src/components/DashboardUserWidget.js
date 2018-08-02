import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography } from "@material-ui/core/";



const Dashboard = ({ secretData, user }) => (
  <Card className="container">
    <CardContent>
    <Typography gutterBottom variant="headline" component="h2">
            WELLCOME TO YOUR DASHBOARD
            {secretData && <Typography><strong>{user.name}</strong></Typography>}    
    </Typography>

    </CardContent>
    
 </Card>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
