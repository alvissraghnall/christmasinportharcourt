import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import reportWebVitals from './reportWebVitals';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-mui';

/** @type('@paypal/react-paypal-js').ReactPayPalScriptOptions */
const initialOptions = {
  clientId: import.meta.env.VITE_PAYPAL_CLIENT_ID,
  currency: "USD",
  intent: "capture",
  commit: true,

};

const alertOptions = {
  // you can also just use 'bottom center'
  position: positions.MIDDLE,
  timeout: 6000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}

// console.log(import.meta.env.VITE_PAYPAL_CLIENT_ID);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PayPalScriptProvider options={initialOptions}>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <App />
        <ToastContainer />
        {/* <PayPalButtons style={{ layout: "horizontal" }} /> */}
      </AlertProvider>
    </PayPalScriptProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

