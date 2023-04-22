import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    display: "flex",
    margin: "10px",
  },
  media: {
    minWidth: 150,
    height: 150,
  },
  content: {
    flex: "1 0 auto",
  },
  title: {
    fontWeight: "bold",
  },
  description: {
    marginTop: "10px",
  },
});

const NewsCard = ({ title, description, imageUrl }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={imageUrl} title={title} />
      <CardContent className={classes.content}>
        <Typography variant="h5" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="body2" className={classes.description}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NewsCard;