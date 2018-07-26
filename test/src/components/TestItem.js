import React, { Component } from 'react';

const TestItem = ({ name }) => {
  return (
    <div>
      Hi, i'm a new item component and my name is <b>{name}</b>
    </div>
  );
};

TestItem.defaultProps = {
  name: '기본이름',
};
export default TestItem;
