import Spinner from 'react-spinner-material';
import React, { Component } from 'react';

export default class Example extends Component {
  render() {
  return (
      <div>
        <Spinner radius={15} color={"#fff"} stroke={2} visible={true} />
      </div>
    );
  }
}