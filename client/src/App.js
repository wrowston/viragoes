import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import About from './components/About';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import ContactForm from './components/ContactForm';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Introduction} />
          <Route exact path="/about" component={About} />
          <Route exact path='/contact' component={ContactForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
