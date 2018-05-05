import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter
} from 'react-router-dom';



import Home from '../Home/Home';
import Login from '../Login/Login';
import JournalMain from '../JournalMain/JournalMain';

export default class Main extends Component{
  render(){
    return(
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/journal" component= { JournalMain } />
        <Route path="/login" component={Login}/>
      </Switch>
    );
  }
}
