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
import { Redirect } from 'react-router';
import { firebaseAuth } from "../../config/constants";
import { loginWithGoogle } from "../../helpers/auth";

const firebaseAuthKey = "firebaseAuthInProgress";
const appTokenKey = "appToken";

export default class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {
        splashScreen: false
    };

    this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
  }
    handleGoogleLogin() {
        loginWithGoogle()
            .catch(function (error) {
                alert(error); // or show toast
                localStorage.removeItem(firebaseAuthKey);
            });
        localStorage.setItem(firebaseAuthKey, "1");
    }


  render(){
    console.log(firebaseAuthKey + "=" + localStorage.getItem(firebaseAuthKey));
       if (localStorage.getItem(firebaseAuthKey) === "1"){
         return  <Redirect to="/journal"/>
       }
       return <LoginPage handleGoogleLogin={this.handleGoogleLogin}/>;
  }
}
const iconStyles = {
    color: "#ffffff"
};
const LoginPage = ({handleGoogleLogin}) => (
    <div>
        <h1>Login</h1>
        <div>
            <Button
                label="Sign in with Google"
                icon={<Icon className="fa fa-google-plus" style={iconStyles}/>}
                onClick={handleGoogleLogin}
            />
        </div>
    </div>
);
const SplashScreen = () => (<p>Loading...</p>)
