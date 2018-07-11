import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const styles = {
  container: {
    width: '800px',
    margin: '20px',
    padding: '20px',
    display: 'flex',
  },
  title: {
    flex: 4,

  },
  timeStart: {
    flex: 1,
  },
  timeFinish: {
    flex: 1,
  },
  timeSpent: {
    flex: 1,
  },
}

class LogItem extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.container}>
        <Typography className={classes.title} variant="title">work item</Typography>
        <Typography className={classes.timeStart} variant="subheading"> 0:00</Typography>
        <Typography className={classes.timeFinish} variant="subheading"> 0:00</Typography>
        <Typography className={classes.timeSpent} variant="subheading"> 0:00</Typography>
      </Paper>
    );
  }
}

export default withStyles(styles)(LogItem);
