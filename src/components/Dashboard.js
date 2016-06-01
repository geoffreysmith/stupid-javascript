import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export default class Dashboard extends React.Component {

constructor(props) {
     super(props);
     this.state = {value: 1};
}

handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
    <div>
      <h1>Dashboard</h1>
  <DropDownMenu value={this.state.value} onChange={this.handleChange}>
    <MenuItem value={1} primaryText="Latest Report: 1/1/2015 9:00am" />
    <MenuItem value={2} primaryText="Every Night" />
    <MenuItem value={3} primaryText="Weeknights" />
    <MenuItem value={4} primaryText="Weekends" />
    <MenuItem value={5} primaryText="Weekly" />
  </DropDownMenu>
  </div>
  )
}
}
