import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import DetalhesPlantas from './pages/DetalhesPlantas';
import Configuracoes from './pages/Configuracoes';
import Register from './components/Register';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
      <Router>
          <Header />
          <main>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/dashboard" element={<PrivateRoute component={Dashboard} />} />
                  <Route path="/plant/:id" element={<PrivateRoute component={DetalhesPlantas} />} />
                  <Route path="/configuracoes" element={<PrivateRoute component={Configuracoes} />} />
              </Routes>
          </main>
          <Footer />
      </Router>
  );
}

export default App;
