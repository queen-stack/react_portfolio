import React from 'react'; 

function Resume() {

return(
<section className="mb-5">
    <h1 className="resume">resume: jeniferQueen</h1>
        <hr></hr>
        <div className="row justify-content-center" id="resume">
            <div className="mt-5 pl-5 pr-5">
            Dynamic leader with deep experience providing strategic expertise for application solutions, with experience driving core business strategies in corporate environments. Recognized for improving technical efficiencies, and aligning business objectives by implementing strategic plans, organizational structure, and process streamlining.

                <p className="mt-5">
                <a href="https://www.linkedin.com/in/jeniferqueen/"><img src="https://img.icons8.com/color/48/000000/linkedin-2.png" alt="JQueen LinkedIn"/></a>
                </p>
                <p>
                Download my full <a href="https://github.com/react_portfolio/raw/master/src/assets/Jenifer_Queen.pdf" className="link">resume</a>
                <br></br>
                </p>
            </div>
        </div>

        <div className="justify-content-center mt-5">
            <div id="front-back">
                <h2>front end experience</h2>
                <p>HTML, CSS (Bootstrap, Bulma), JavaScript, jQuery, React.js, Angular.js, IndexedDB</p>
            </div>
    
            <div id="front-back" className="mt-5">
                <h2>back end experience</h2>
                <p>
                Node.js, Express.js, SQL (sqlite, mySQL), Sequelize, NoSQL (MongoDB, Mongoose), API's (third-party, RESTful, server-side), Template (Handlebars)
                </p>
            </div>
        </div>
</section>
);
}

export default Resume;