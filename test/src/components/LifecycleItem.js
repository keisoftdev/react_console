import React, { Component } from 'react';

class LifecycleItem extends Component {
  constructor(props) {
    super(props);
    console.log('1. Constructor Called!!!');
    this.state = {};
  }

  render() {
    return <div>!!</div>;
  }
}

export default LifecycleItem;
