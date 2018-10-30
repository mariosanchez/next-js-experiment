import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "react-emotion";

import { increment, decrement, reset } from "../actions";

const ClockWrapper = styled.div`
  padding: 0 0 20px 0;
`;

class Counter extends Component {
  increment = () => {
    this.props.dispatch(increment());
  };

  decrement = () => {
    this.props.dispatch(decrement());
  };

  reset = () => {
    this.props.dispatch(reset());
  };

  render() {
    const { count } = this.props;
    return (
      <ClockWrapper>
        <h1>
          Count: <span>{count}</span>
        </h1>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </ClockWrapper>
    );
  }
}

const mapStateToProps = ({ count }) => ({ count });
export default connect(mapStateToProps)(Counter);
