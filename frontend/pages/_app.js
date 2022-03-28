import "../styles/globals.css";
import Layout from "../components/Layout";
import axios from "axios";

function MyApp({ Component, pageProps, data }) {
  return (
    <Layout data={data}>
      <Component {...pageProps} />
    </Layout>
  );
}

MyApp.getInitialProps = async (ctx) => {
  const res = await axios.get(`http://localhost:5000/categorie`);

  return { data: res.data.data };
};
export default MyApp;
