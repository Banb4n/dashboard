import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider, Subscribe } from 'unstated';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountBox from '@material-ui/icons/AccountBox';
import InsertChart from '@material-ui/icons/InsertChart';
import AttachMoney from '@material-ui/icons/AttachMoney';
import TableChart from '@material-ui/icons/TableChart';
import RecentActors from '@material-ui/icons/RecentActors';

import logo from './logo.svg';
import './App.css';
import UserProfile from './components/UserProfile';
import Bookmakers from './components/Bookmakers';
import Bets from './components/Bets';
import Finance from './components/Finance';
import Drawer from './components/styleguide/drawer';
import AppContainer from './containers/AppContainer';


function App() {
    const navItems = (
      <React.Fragment>
          <List>
              <Link to={'/'}>
                  <ListItem button>
                        <ListItemIcon><AccountBox /></ListItemIcon>
                        <ListItemText primary="Profile" />
                  </ListItem>
              </Link>
              <Link to={'/progression'}>
                  <ListItem button>
                      <ListItemIcon><AttachMoney /></ListItemIcon>
                      <ListItemText primary="Progression" />
                  </ListItem>
              </Link>
          </List>
          <Divider />
          <List>
              <Link to={'/paris'}>
                  <ListItem button>
                      <ListItemIcon><TableChart /></ListItemIcon>
                      <ListItemText primary="Paris" />
                  </ListItem>
              </Link>
              <ListItem button>
                  {/* <Link to={'/progression'}> */}
                      <ListItemIcon><InsertChart /></ListItemIcon>
                      <ListItemText primary="Progression" />
                  {/* </Link> */}
              </ListItem>
              <Link to={'/bookmakers'}>
                <ListItem button>
                        <ListItemIcon><RecentActors /></ListItemIcon>
                        <ListItemText primary="Bookmakers" />
                </ListItem>
              </Link>

          </List>
      </React.Fragment>
    );

    return (
      <div className="App">
          <Provider>
              <Router>
                  <Drawer title="Mon dashboard" content={navItems}>
                      <Route exact path="/" component={UserProfile} />
                      <Route path="/bookmakers" component={Bookmakers} />
                      <Route path="/paris" component={Bets} />
                      <Route path="/progression" component={Finance} />
                      {/* <Route path="/topics" component={Topics} /> */}
                  </Drawer>
              </Router>
          </Provider> 
      </div>
    );
}

export default App;
