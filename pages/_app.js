import Layout from '../components/Layout/Layout';
import photo from '../public/Hero/hero.png'
import '../styles/index.scss';


const MyApp = ({Component, pageProps}) => {
    return (
        <Layout>
            <main className="main c-section c-section--bg">
                <section className=""></section>
                <Component {...pageProps} />
            </main>
        </Layout>
    );
};

export default MyApp;
