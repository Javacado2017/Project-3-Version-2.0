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

    <a target="_blank" href="https://mail.google.com/mail/u/0/?ui=2&ik=1e035e3806&view=fimg&th=164fcb580c0cf510&attid=0.1&disp=emb&realattid=ii_jkd4bs3j0&attbid=ANGjdJ_zI0e5GkxsDWQRVHfl5f1-Zd4_nx_LcPxZJ1uYkj5NqoVW-YWSQy-iKzD9TLfBZuOyny-PEmzzQR0fU-dxX_sb2Pf0BrYLZ4OAlHXtMCRveLx3pq8dxwjP69k&sz=w1014-h760&ats=1533248113067&rm=164fcb580c0cf510&zw&atsh=1">
      Storyboard
    </a>
    <br />
    <a target="_blank" href="https://mail.google.com/mail/u/0/?ui=2&ik=1e035e3806&view=fimg&th=164fc94f2feb01f7&attid=0.1&disp=emb&realattid=ii_jkd31ij90&attbid=ANGjdJ8CSGBzJAH28-E7amC3vOocQGUPXNXt5T2mV8pZPEagohFNEDJcoImqO_LkElBFEU9wYPHrCYGaHR8Rbw-Ee1EpdZxAAGUy4TQn0JkWjKKDPnxXsp4vg8Cx5lE&sz=w1014-h510&ats=1533247240927&rm=164fc94f2feb01f7&zw&atsh=1">
      Charts should have looked like
    </a>
    <br />
    <a target="_blank" href="https://mail.google.com/mail/u/0/?ui=2&ik=1e035e3806&view=fimg&th=164fc94f2feb01f7&attid=0.2&disp=emb&realattid=ii_jkd31tit1&attbid=ANGjdJ8s8u3so1DJe860_FBe1G33_UCelD04zTDGbgNmExj3rIL02FlEKK7MP2i8x2bz4ajCNvqivk-52c3tCNYv_dCA6GGERSCe8ivBvg5MxHsG86fC_rdUBsHGhsY&sz=w1014-h512&ats=1533247240927&rm=164fc94f2feb01f7&zw&atsh=1">
      Home page should have looked like this
    </a>

    </CardContent>
    
 </Card>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
