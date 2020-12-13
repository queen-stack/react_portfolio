import React, { Component } from 'react';

import Navigation from '../../components/Navigation';


class Header extends Component {
    render() {
        return (
            <div className="row Header" id="header">
            <Navigation />
        </div>
          
        )
    }
}

export default Header;