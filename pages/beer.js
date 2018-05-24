import Layout from "../app/components/Layout";
import fetch from 'isomorphic-unfetch'

const Beer = ({ beer }) => (
  <Layout>
    <p>{ beer.name }</p>
  </Layout>
);

Beer.getInitialProps = async function (context) {
  const { id } = context.query;
  const res = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
  const beers = await res.json();

  return { beer: beers[0] }
}

export default Beer;