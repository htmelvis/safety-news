import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

const NewsContainer = (props) => (
  <div className={props.classes.root}>
    <h1>Your Latest News</h1>
    { props.stories.map( (story, i) => {
      return (
        <div key={story + i} className="story story-card">
          <h2>{story.title}</h2>
          <p>{story.body}</p>
        </div>
      )
    })
    }
  </div>
);

export default NewsContainer;