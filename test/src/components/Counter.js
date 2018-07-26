import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0,
  };

  componentDidMount = () => {
    // 외부 라이브러리 연동: D3, masonry, etc
    // 컴포넌트에서 필요한 데이터 요청: Ajax, GraphQL, etc
    // DOM 에 관련된 작업: 스크롤 설정, 크기 읽어오기 등
    console.log('3. componentDidMount() called!!');
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('Prev State :', prevState);
    console.log('Next Props :', nextProps);
    if (prevState != null && nextProps.value !== prevState.value) {
      return { value: nextProps.value };
    } else return null;
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    console.log(' shouldComponentUpdate() called!!');
    return true;
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforUpdate() called!!');
    return { num: 1, line: 2 };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDisUpdate called!!');
    if (snapshot) {
      console.log(snapshot);
    }
  }

  componentWillUnmount = () => {
    console.log('componentWillUnmount Called!!');
  };

  handleIncrease = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  handleDecrease = () => {
    this.state({
      number: this.state.number - 1,
    });
  };

  render() {
    return (
      <div>
        <h1>카운터</h1>
        <div>값: {this.state.number}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;
