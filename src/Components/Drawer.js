import React from 'react';
import clsx from 'clsx';
import {Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Container } from 'reactstrap';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
  list: {
    width: 280,
  },
  fullList: {
    width: 'auto',
  },
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (left, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [left]: open });
  };

  const list = (left) => (
      <div
      className={clsx(classes.list, {
          [classes.fullList]: left === 'top' || left === 'bottom',
        })}
        style={{overflowX:'hidden'}}
        >
        <Container className="sidebartop">
        <center>
          <img src={require("../imgs/user.PNG")} alt="User image here"/>
          <div className='qtext namesidebar'>Name Of The Student</div>
      <Grid >
        {['Class Of Student', 'Section', 'Branch', 'City Location'].map((text, index) => (
          <Grid item container button xs={12} style={{margin:'2px'}}>
              <Grid item xs={2}></Grid>
            <Grid item xs={2}> <InboxIcon /> </Grid>
            <Grid item >{text}</Grid>
          </Grid>
        ))}
      </Grid> 
      </center>     
    </Container>
      <Divider />
    <Container className='sidebarbottom'>
      <List >
        {['Assesments', 'Live Streaming', 'Analytics','Notifications', '' , 'BlogPosts','Share App', 'Logout'].map((text, index) => (
            <Link to={`/${text}`} style={{textDecoration:'none',color:'whitesmoke'}}>
              <ListItem button key={text}>
                <ListItemIcon>{text  === '' ? <div></div> : <MailIcon style={{color:'whitesmoke'}}/>}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
        ))}
      </List> 

      <Grid container style={{textAlign:'center'}} className='cont1r'>
            <Grid item xs={3}></Grid>
            <Grid item xs={2}><i className="fa fa-facebook fa-2x"></i></Grid>
            <Grid item xs={2}><i className="fa fa-twitter fa-2x"></i></Grid>
            <Grid item xs={2}><i className="fa fa-instagram fa-2x"></i></Grid>
      </Grid>
      <Grid style={{textAlign:'center'}} className='cont1r'>
            Privacy Policy | Terms And Conditions
      </Grid>
    </Container>
    </div>
  );

  return (
    <div>
      {[''].map((left) => (
        <React.Fragment>
          <Button  p={1} m={3} onClick={toggleDrawer(left, true)} style={{fontSize:'larger',color:'gray',background:'white'}}>
                    <i class="fa fa-bars"></i>
                </Button >
          <SwipeableDrawer
            left={left}
            open={state[left]}
            onClose={toggleDrawer(left, false)}
            onOpen={toggleDrawer(left, true)}
          >
            {list(left)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
