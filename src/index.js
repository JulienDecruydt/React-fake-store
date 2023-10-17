import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import reportWebVitals from './reportWebVitals';

import './index.css';
import App from './App';

import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';
import SettingsPage from './pages/SettingsPage';
import Menu from './components/Menu'


import { Provider } from 'react-redux'
import { store } from './redux'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <Menu />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>        
      </Provider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
