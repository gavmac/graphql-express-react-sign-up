import React from 'react';
import ReactDOM from 'react-dom';
import { Security, ImplicitCallback } from '@okta/okta-react';
import { BrowserRouter, Route } from 'react-router-dom';


import App from './App';
import { ApolloProvider } from 'react-apollo';
import 'bootstrap/dist/css/bootstrap.min.css';
import client from './apollo';
import * as serviceWorker from './serviceWorker';

const config = {
    issuer: '{process.env.REACT_APP_OKTA_ORG_URL}/oauth2/default',
    redirect_uri: window.location.origin + '/implicit/callback',
    client_id:'{process.env.REACT_APP_OKTA_CLIENT_ID}'
}

ReactDOM.render(
    <BrowserRouter>
        <Security
            issuer={"https://dev-951263.okta.com/oauth2/default"}
            client_id={"0oaqwra4qWh70ThAr356"}
            redirect_uri={window.location.origin + '/implicit/callback'}
        >
            <ApolloProvider client={client}>
                <Route path="/implicit/callback" component={ImplicitCallback} />
                <Route path="/" component={App} />
            </ApolloProvider>
        </Security>
    </BrowserRouter>,
    document.getElementById('root')
);
// if (module.hot) module.hot.accept();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
