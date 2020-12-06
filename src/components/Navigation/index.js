import React from 'react';
import {NavLink} from "react-router-dom";

function Navigation(props) {   

    return (
    <div className=" row navigation" id="navigation">
        <NavLink to="/about" activeClassName="selected">about </NavLink>
        <NavLink to="/portfolio" activeClassName="selected">portfolio </NavLink>
        <NavLink to="/contact" activeClassName="selected">contact </NavLink>
        <NavLink to="/resume" activeClassName="selected">resume </NavLink>
    </div>
  );
}

export default Navigation;