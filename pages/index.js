import React from "react";
import { toArray } from "lodash";
import { connect } from "react-redux";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import styled, { hydrate, keyframes, css } from "react-emotion";
import { fetchBeers } from "../app/actions";
import Layout from "../app/components/Layout";

const BeerItemImage = styled.img`
  max-width: 100px;
  max-height: 200px;
`;

class Index extends React.Component {
  static async getInitialProps(props) {
    const { store } = props;

    if (Object.keys(store.getState().beers).length === 0) {
      store.dispatch(fetchBeers());
    }
  }

  render() {
    return (
      <Layout>
        <h1>Punk API</h1>
        <h2>Beer list</h2>
        {toArray(this.props.beers).map(beer => (
          <Link
            as={`/beer/${beer["id"]}`}
            href={`/beer?id=${beer["id"]}`}
            key={beer["name"]}
          >
            <a>
              <h3>{beer["name"]}</h3>
              <BeerItemImage src={beer["image_url"]} alt={beer["name"]} />
            </a>
          </Link>
        ))}
      </Layout>
    );
  }
}

export default connect(state => state)(Index);
