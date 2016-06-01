import React from 'react';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
//import auth from './Authentication/Auth'
import { browserHistory } from 'react-router'


class LoginForm extends React.Component {

  constructor(props) {
    super(props);

    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      username: null,
      password: null,
      isLoggedIn:  false,
      loginError: false
    }

    // if we get here then we want to also log ourselves out
    localStorage.removeItem('token')
   }

  updateUsername(event) {
    this.setState({
      username: event.target.value
    });
  }

  updatePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleSubmit() {
   this.login(this.state.username, this.state.password, (success) => {
      if (!success)
      {
        this.setState({ isLoggedIn: false })
        this.setState({ loginError: true })
        return
      }

      this.setState({ isLoggedIn: true })

      browserHistory.push('/')
    })
  }

  render() {
    return (
      <div style={{width: "400px", margin: "0 auto", padding: "40px"}}>
        <Paper zDepth={2} style={{padding: 20}}>
          <h1>Login:</h1>
          { this.state.loginError &&
          <span>Invalid login</span>
          }
          <form>
            <TextField
              hintText = "Username"
              floatingLabelText = "Username"
              underlineShow = {false}
              onChange = {this.updateUsername} />
            <Divider/>
            <TextField hintText = "Password"
              floatingLabelText = "Password"
              underlineShow={false}
              onChange = {this.updatePassword} />
            <br/>
            <RaisedButton
              label="Submit"
              style={{marginTop: 30}}
              onClick={this.handleSubmit} />
          </form>
      </Paper>
      </div>
    );
  }

  // Refactor this to somewhere else

  login(email, pass, cb) {
    cb = arguments[arguments.length - 1]
    if (localStorage.token) {
      if (cb) cb(true)
      this.onChange(true)
      return
    }

    this.pretendRequest(email, pass, (res) => {
      console.log('in here')
      if (res.authenticated) {
        localStorage.token = res.token
        localStorage.fullname = res.fullname

        if (cb) cb(true)
        this.onChange(true)
      } else {
        if (cb) cb(false)
        this.onChange(false)
      }
    })
  }

  getToken() {
    return localStorage.token
  }

  logout(cb) {
    delete localStorage.token
    if (cb) cb()
    this.onChange(false)
  }

  loggedIn() {
    return !!localStorage.token
  }

  onChange() {}

  pretendRequest(email, pass, cb) {
    setTimeout(() => {
      if (email === 'geoff' && pass === 'password') {
        cb({
          authenticated: true,
          token: Math.random().toString(36).substring(7),
          fullname: 'geoffrey smith'
        })
      } else {
        cb({ authenticated: false })
      }
    }, 0)
}

// Refactor this to somewhere else

}

export default LoginForm;
