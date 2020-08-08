import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = (theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class CardView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      setExpanded: false,
      short_text: props.values.short_text,
      long_text: props.values.long_text,
      image_url: props.values.image_url,
      catch_phrase: props.values.catch_phrase,
      updated_at: new Date(props.values.updated_at).toGMTString(),

    }
  }

  componentWillReceiveProps(props) {
    console.log(props)
    this.setState({
      short_text: props.short_text,
      long_text: props.long_text,
      image_url: props.image_url
    })
  }

  handleExpandClick = () => {
    this.setState({
      expanded: !this.state.expanded
    })
  };

  render() {
    const { classes } = this.props;
    return (

      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {this.state.short_text[0]}
            </Avatar>
          }
          // action={
          //   <IconButton aria-label="settings">
          //     <MoreVertIcon />
          //   </IconButton>
          // }
          title={this.state.short_text}
          subheader={this.state.updated_at}
        />
        <CardMedia
          className={classes.media}
          image={this.state.image_url}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {this.state.catch_phrase}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          {/* <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton> */}
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Information:</Typography>
            <Typography paragraph>
              {this.state.long_text}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

export default withStyles(useStyles)(CardView);
