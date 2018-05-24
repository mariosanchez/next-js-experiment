import Layout from "../app/components/Layout";
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Index = ({ beers }) => (
  <Layout>
    <h1>Punk API</h1>
    <h2>Beer list</h2>
    <p>Index</p>
    { beers.map(beer => (
      <Link as={`/beer/${beer['id']}`} href={`/beer?id=${beer['id']}`} key={beer['name']}> 
        <a>
          <h3>{beer['name']}</h3>
          <img src={beer['image_url']} alt={beer['name']}/>
        </a>
      </Link>
    ))}
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch('https://api.punkapi.com/v2/beers?page=1&per_page=5')
  const data = await res.json()

  return {
    beers: data
  }
}

export default Index