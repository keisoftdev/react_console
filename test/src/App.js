import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import TestItem from './components/TestItem';
import Counter from './components/Counter';
import LifecycleItem from './components/LifecycleItem';

class App extends Component {
  render() {
    return (
      <div>
        <TestItem name="Test Item Component" />
        <Counter />
        <LifecycleItem />
      </div>
    );
  }
}

export default App;
