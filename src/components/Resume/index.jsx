import linkedin from '../../assets/icons8-linkedin.gif'

function Resume() {
    return (
      <section className="container">
        <h2 className="top-title">Resume</h2>
        <hr></hr>
  
        <div>
          <div className="mt-5">
            <p className="mt-5">
              <a href="https://www.linkedin.com/in/davidromero-l/">
                <img
                  src={linkedin}
                  alt="inkedIn"
                  className="resume-logo"
                />
              </a>
            </p>
  
            <a
              href="https://docs.google.com/document/d/1Hhb50hcJ1lok8n4LtWfhSnouQTFljRuT50KN_Bvg084/edit?usp=sharing"
              className="link"
            >
              Download Resume
            </a>
          </div>
        </div>
  
        <div className="justify-content-center mt-5">
          <div>
            <h2 className="top-title">A bit of my knowledge..</h2>
            <ul>
              <li>
              JavaScript, jQuery, React.js, Node.js, Express.js, Handlebars.js, REST API's, MongoDB, MySQL, Jest, Git 
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
  
  export default Resume;