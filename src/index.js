import 'bootstrap/dist/css/bootstrap.min.css'

import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
  
  <Provider store={Store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
 
  </React.StrictMode>
);


