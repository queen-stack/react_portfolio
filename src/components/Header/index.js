import React, { Component } from 'react';
import { Route, Redirect, BrowserRouter } from "react-router-dom";
import Navigation from '../../components/Navigation';
import About from '../../components/About';
import Contact from '../../components/Contact';
import Portfolio from '../../components/Portfolio';
import Resume from '../../components/Resume';

class Header extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="row Header" id="header">
                    <Navigation />
                </div>

                <div className="content">
                    <Route exact path="/" render={() => (<Redirect to="/portfolio" />)} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/resume" component={Resume} />
                </div>
            </BrowserRouter>
        )
    }
}

export default Header;