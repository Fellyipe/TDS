import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import PlantDetails from './pages/PlantDetails';
import Settings from './pages/Settings';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/plant/:id" component={PlantDetails} />
                <Route path="/settings" component={Settings} />
            </Switch>
        </Router>
    );
}

export default App;
