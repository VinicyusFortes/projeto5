import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";

import CriarConta from './Pages/CriarConta';
import Footer from './Componentes/Footer';
import Header from './Componentes/Header';
import Login from './Pages/Login';
import Index from './Pages/Index';
import Perfil from './Pages/Perfil';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route index path="/index" element={<Index />} />
        <Route path="/criarconta" element={<CriarConta />} />
        <Route path="/login" element={<Login />} />
        <Route path="/perfil" element={<Perfil/>} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
