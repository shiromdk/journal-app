import React, { Component } from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive
} from 'semantic-ui-react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter
} from 'react-router-dom';

import JournalHome from './JournalHome/JournalHome';
import JournalAddNew from './JournalAddNew/JournalAddNew';

export default class JournalMain extends Component{
    render() {
        return (
          <div>
            <h2>Header</h2>
            <Switch>
              <Route path="/journal/add/" component={ JournalAddNew } />
              <Route exact path="/journal/" component={ JournalHome } />
            </Switch>
          </div>
        );
    }
}
