import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const LoginBar = () => {
  return (
  <RaisedButton
    label="Login"
    linkButton={true}
    href="/login"
    secondary={true}
    style={{color: "white"}}
  />
);
};

export default LoginBar;
