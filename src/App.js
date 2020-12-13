import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Redirect, BrowserRouter } from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

// Run app 
function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <div className="content">
          <Route exact path="/" render={() => (<Redirect to="/about" />)} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
        </div>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;