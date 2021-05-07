import React, {Component} from 'react';
import DashBoard from './DashBoard';
import AddEmployee from './AddEmployee';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {Grid, Paper, Button, Typography, Container} from '@material-ui/core';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component{
  render(){
    return (
      <React.Fragment>
        <BrowserRouter>
          <div>
            <Route path="/" component={DashBoard} />
            <Route path="/AddEmployee" component={AddEmployee} />
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}