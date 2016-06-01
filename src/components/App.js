import React from 'react';
import LoginBar from './LoginBar';
import AppBar from 'material-ui/AppBar';

class App extends React.Component {

  constructor(props) {
    super(props);
    console.log('hello')
  }

  render() {
    const { props } = this
    console.log(this.state)

    return (
    <div>
      <AppBar style={{backgroundColor: '#455a64'}}
              title="ADA Aware"
              showMenuIconButton={false}>
        <LoginBar/>
      </AppBar>
      <div>
        {props.children}
      </div>
    </div>
  )}
}

export default App;
