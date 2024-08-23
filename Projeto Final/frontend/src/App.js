import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PlantCard from './components/PlantCard';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import DetalhesPlantas from './pages/DetalhesPlantas';
import Configuracoes from './pages/Configuracoes';

function App() {
  return (
      <Router>
          <Header />
          <main>
              <Routes>
                  <Route exact path="/" component={Home} />
                  <Route path="/dashboard" component={Dashboard} />
                  <Route path="/plant/:id" component={DetalhesPlantas} />
                  <Route path="/configuracoes" component={Configuracoes} />
              </Routes>
          </main>
          <Footer />
      </Router>
  );
}

export default App;
