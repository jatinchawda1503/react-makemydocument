import React from 'react';
import Navbar from './Components/navbar';
import './css/style.css';
import './css/custom.css';
import './css/blue.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact-us';
import Domicile from './pages/services/domicile';
import Income from './pages/services/income-certificate';



function App() {
  return (
    
    <Router>
      <Navbar />
      <Switch>
      <Route path="/services/income-certificate" component={Income} />
      </Switch>
      <Switch>
      <Route path="/services/domicile-certificate" component={Domicile} />
      </Switch>
      <Switch>
      <Route path="/contact-us" component={Contact} />
      </Switch>
      <Switch>
      <Route path="/about-us" component={About} />
      </Switch>
      <Switch>
      <Route path="/" component={Home} exact />
      </Switch>
        </Router>
       
  );
}

export default App;
