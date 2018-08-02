import React from "react";
import PropTypes from "prop-types";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const styles = {
  maxHeight: 250
};

function SimpleMediaCard(props) {
  const { title, description, url, image } = props;
  return (
    <Card style={styles}>
     <CardContent>
      <Grid container spacing={16}>
        <Grid item xs={4}>
          <CardMedia>
            <img
              width="250"
              src={image}
              alt=""
            />
          </CardMedia>
        </Grid>
        <Grid item xs={8}>
         
            <Typography gutterBottom variant="headline" component="h2">
              {title}
            </Typography>
            <Typography component="p">
              {description}
            </Typography>
       
          <CardActions>
            <Button size="small" color="primary">
              <a href={url} target="_blank">
                Learn more
              </a>
            </Button>
          </CardActions>
          </Grid>
      </Grid>
      </CardContent>
    </Card>
  );
}

export default SimpleMediaCard;
