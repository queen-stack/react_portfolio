import React, { Component } from 'react';
import { Route, Redirect, HashRouter } from "react-router-dom";
import Navigation from '../../components/Navigation';
import About from '../../components/About';
import Contact from '../../components/Contact';
import Portfolio from '../../components/Portfolio';
import Resume from '../../components/Resume';

class Header extends Component {
    render() {
        return (
            <HashRouter>
                <div className="row Header" id="header">
                    {/* need to input link to Portfolio */}
                    <a href="https://glacial-oasis-98966.herokuapp.com/"><img src="https://img.icons8.com/color/48/000000/astronaut.png" alt="Jenifer Queen" className="icon" id="astro" /></a>
                    <Navigation />
                </div>

                <div className="content">
                    <Route exact path="/" render={() => (<Redirect to="/portfolio" />)} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/resume" component={Resume} />
                </div>
            </HashRouter>
        )
    }
}

export default Header;