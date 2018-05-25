import React from "react";
import { connect } from "react-redux";
import Layout from "../app/components/Layout";
import { fetchBeer } from "../app/actions";

class Beer extends React.Component {
  static getInitialProps(props) {
    const { store, query } = props;
    const id = query.id;

    if (!store.getState().beers[id]) {
      store.dispatch(fetchBeer(id));
    }

    return { id };
  }

  render() {
    return (
      <Layout>
        <p>{this.props.beers[this.props.id].name}</p>
      </Layout>
    );
  }
}

export default connect(state => state)(Beer);
