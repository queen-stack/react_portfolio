import React from 'react';

function Footer() {
    return (
        <div className="footer" id="footer">
            <a href="https://github.com/queen-stack"><img src="https://img.icons8.com/color/48/000000/github-2.png" alt="Github" className="icon" /></a>
            <a href="https://www.linkedin.com/in/jeniferqueen/"><img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" className="icon" /></a>
            <a href="https://instagram.com/jqueen007"><img src="https://img.icons8.com/color/48/000000/instagram.png" alt="Instagram" class="icon" /></a>
            <p>
                {/* link to resume */}
                &copy; jenifer queen  |  <a href="/assets/Resume_Queen.pdf" className="link" download>resume</a>  |  <a href="https://coolors.co/f06543-e8e9eb-e0dfd5-313638-f09d51">color palette</a>  |  made with <img id="react-icon" src="https://img.icons8.com/color/48/000000/react-native.png" alt="React" />
                {/* link to resume */}
 &copy; jenifer queen  |  <a href={`${process.env.PUBLIC_URL}/assets/Resume_Queen.pdf`} className="link" download>resume</a>  |  <a href="https://coolors.co/f06543-e8e9eb-e0dfd5-313638-f09d51">color palette</a>  |  made with <img id="react-icon" src="https://img.icons8.com/color/48/000000/react-native.png" alt="React" />
export default Footer;
            </p>

        </div>
    )
}
