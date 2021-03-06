/**
 * Create React App entry point. This and `public/index.html` files can not be
 * changed or moved.
 */
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import * as _redux from './redux';
import store, { persistor } from './redux/store';
import App from './app/app';
import './index.scss'; // Standard version
// import "./sass/style.react.rtl.css"; // RTL version
import './_metronic/_assets/plugins/keenthemes-icons/font/ki.css';
import 'socicon/css/socicon.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './_metronic/_assets/plugins/flaticon/flaticon.css';
import './_metronic/_assets/plugins/flaticon2/flaticon.css';
// Datepicker
import { MetronicI18nProvider } from './app/layout/i18n';
import { MetronicLayoutProvider } from './app/layout/_core/metronic-layout';
import { MetronicSplashScreenProvider } from './app/layout/_core/metronic-splash-screen';

/**
 * Base URL of the website.
 *
 * @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
 */
const { REACT_APP_PUBLIC_URL } = process.env;

/**
 * Creates `axios-mock-adapter` instance for provided `axios` instance, add
 * basic Metronic mocks and returns it.
 *
 * @see https://github.com/ctimmerm/axios-mock-adapter
 */
/**
 * Inject metronic interceptors for axios.
 *
 * @see https://github.com/axios/axios#interceptors
 */
axios.create();
_redux.setupAxios(axios, store);

ReactDOM.render(
  <MetronicI18nProvider>
    <MetronicLayoutProvider>
      <MetronicSplashScreenProvider>
        <App store={store} persistor={persistor} basename={REACT_APP_PUBLIC_URL} />
      </MetronicSplashScreenProvider>
    </MetronicLayoutProvider>
  </MetronicI18nProvider>,
  document.getElementById('root'),
);
