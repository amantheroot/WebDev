import Layout from "../components/Layout";
import Prices from "../components/Prices";
import Fetch from "isomorphic-unfetch";

const Index = props => (
  <Layout>
    <div>
      <h1>WELCOME TO BITZPRICE</h1>
      <Prices bpi={props.bpi} />
    </div>
  </Layout>
);

const getData = async function() {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const data = await res.json();

  return {
    bpi: data.bpi
  };
};

Index.getInitialProps = getData;

export default Index;
