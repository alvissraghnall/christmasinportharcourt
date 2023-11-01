import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

/** @type('@paypal/react-paypal-js').ReactPayPalScriptOptions */
const initialOptions = {
  clientId: import.meta.env.CLIENT_ID,
  currency: "USD",
  intent: "capture",
  commit: true,

};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PayPalScriptProvider options={initialOptions}>
      <App />
      {/* <PayPalButtons style={{ layout: "horizontal" }} /> */}
    </PayPalScriptProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

