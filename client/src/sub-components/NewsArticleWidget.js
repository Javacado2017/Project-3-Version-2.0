import React from "react";
import PropTypes from "prop-types";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  maxHeight: 250
};

function SimpleMediaCard(props) {
  const { classes } = props;
  return (
    <div class='container'>
    <div class='col s2'>
    </div>

    <div class='col s8'>
      <Card style={styles}>
      <div class='row'>
        <div class='col s6'>
        <CardMedia>
          <img
            height='250'
            width="100%"
            src="https://www.ccn.com/wp-content/uploads/2017/06/Facebook-notifications.jpg"
            alt=""
          />
        </CardMedia>
        </div>
        <div class='col s6'>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Opinion | How Blockchain Could Fix Facebook's Fake News Problem
          </Typography>
          <Typography component="p">
            Facebook has a big fake news problem, and the company can solve that
            issue by taking a serious look at blockchain technology.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            <a href="https://www.ccn.com/opinion-how-blockchain-could-fix-facebooks-fake-news-problem/">
              Learn More
            </a>
          </Button>
        </CardActions>
        </div>
      </div>
      </Card>
    </div>

    <div class='col s2'>
    </div>
    </div>


  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default SimpleMediaCard;
