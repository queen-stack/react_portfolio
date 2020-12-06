import React from 'react';

function About() {
    return(
    <section className="title">
      <h1 className="name">about: Jenifer Queen</h1>
      <hr></hr>
      
      <div className="row justify-content-center">
        <div className="col-10" id="about-section">
            <img className="mb-5" src={`${process.env.PUBLIC_URL}/assets/images/JQueen.png`} alt="Jenifer Queen"/>
        <p>
        Thrives in high-volume environments and can navigate 
        evolving business needs, improve client experiences, 
        and drive profitability. 
        </p>
        <p>
        Easily understands technical concepts and implications, 
        manage trade-offs and evaluate new opportunities with stakeholders. 
        </p>
        <p>
            Loves to learn new technology!  
            During COVID, successfully completed a remote course on full stack web development.
        </p>
        <p>
            Download full <a href="/assets/Resume_Queen.pdf" target="_blank" className="link">resume</a>
    </p>
      </div>  
      </div>
    </section> 
)}
  
export default About;