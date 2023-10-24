import React from 'react';
export default class BtnTest extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {

  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>BtnTest</button>
      </div>
    );
  }
}