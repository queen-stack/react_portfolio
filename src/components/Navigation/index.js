import React from 'react';
import {Link} from "react-router-dom";

function Navigation(props) {   

    return (
    <div className=" row navigation" id="navigation">
        <Link to="/about" activeClassName="selected">about </Link>
        <Link to="/portfolio" activeClassName="selected">portfolio </Link>
        <Link to="/contact" activeClassName="selected">contact </Link>
        <Link to="/resume" activeClassName="selected">resume </Link>
    </div>
  );
}

export default Navigation;