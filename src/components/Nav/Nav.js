import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
export default class Nav extends Component{
  render(){
    return(
      <nav>
        <input type="checkbox" id="nav-checkbox" />
        <label className="nav-label" htmlFor="nav-checkbox">
          <span className="nav-toggle">☰</span>
          <ul className="nav-menu first">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/journal/">Journal</Link>
            </li>
          </ul>
        </label>
      </nav>
    );
  }
}
