import React from 'react';

function Footer() {   
    return (
    <div className="footer" id="footer">
        <a href="https://github.com/queen-stack"><img src="https://img.icons8.com/color/48/000000/github-2.png" alt="Github" className="icon"/></a>
        <a href="https://www.linkedin.com/in/jeniferqueen/"><img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" className="icon"/></a>
        
        <p>
        &copy; jeniferQueen  |  <a href="https://glacial-oasis-98966.herokuapp.com/" class="link">download resume</a>  |  <a href="https://coolors.co/f06543-e8e9eb-e0dfd5-313638-f09d51">color palette</a>  |  made with <img id="react-icon" src="https://img.icons8.com/color/48/000000/react-native.png" alt="React"/>
        </p>

    </div>
    )
}

export default Footer;