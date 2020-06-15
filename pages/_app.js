import { Provider } from 'react-redux';
import App from 'next/app';
import withReduxStore from '../lib/with-redux-store';
import Layout from './components/Questionnaire/Layout';

class MyApp extends App {
    render() {
        const { Component, pageProps, store } = this.props
        return (
            <Layout>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Layout>
        )
    }
}

export default withReduxStore(MyApp)