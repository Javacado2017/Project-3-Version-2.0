import React from "react";
import PropTypes from "prop-types";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";

const styles = {};

function HomeChartsWidget(props) {
  const { classes } = props;
  return (
    <Card>
      <CardContent>
        <div class="row" >
          <div class="col s10">
            <Typography variant="subheading" color="textPrimary">
              <i class="cf cf-btc" /> Bitcoin
            </Typography>
            <Typography variant="display1">$7,749.99</Typography>
          </div>
          <div class="col s2 right-align">
            <Chip
              avatar={
                <Avatar>
                  <i class="cf cf-btc" />
                </Avatar>
              }
              label="24hr"
            />
          </div>
        </div>
        <div class="row right-align">
          <Card>
            <img
              height="250"
              width="100%"
              src="https://www.ccn.com/wp-content/uploads/2017/06/Facebook-notifications.jpg"
              alt=""
            />
          </Card>

          <Button size="large">Buy/Sell</Button>
        </div>
      </CardContent>
    </Card>
  );
}

HomeChartsWidget.propTypes = {
  classes: PropTypes.object.isRequired
};

export default HomeChartsWidget;
