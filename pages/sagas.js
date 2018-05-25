import React from "react";
import { connect } from "react-redux";
import { startClock, tickClock } from "../app/actions";
import Layout from "../app/components/Layout";
import Clock from "../app/components/Clock";
import Counter from "../app/components/Counter";

class Sagas extends React.Component {
  static async getInitialProps(props) {
    const { store, isServer } = props;
    store.dispatch(tickClock(isServer));

    return { isServer };
  }

  componentDidMount() {
    this.props.dispatch(startClock());
  }

  render() {
    return (
      <Layout>
        <Clock lastUpdate={this.props.lastUpdate} light={this.props.light} />
        <Counter />
      </Layout>
    );
  }
}

export default connect(state => state)(Sagas);
