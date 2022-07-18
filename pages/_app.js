import "../styles/globals.css";
import Layout from "../components/layout/Layout";

// render your global header
function MyApp({Component, pageProps}) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
