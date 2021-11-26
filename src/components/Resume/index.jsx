import { useEffect } from 'react'
import './resume.scss'
import resume from '../../assets/resume.pdf';

export default function Resume() {
    return (
        <div className="resume" id="resume">
            <div className="container">
                <div className="summary">
                    <h2>Resume</h2>
                    <p>Hello, I'm a Full Stack Developer with knowledge in MERN Stack and responsive web development. Recently,
                        I Attended the University of Arizona Coding Bootcamp where I received a Certifcate in Full Stack Web Development.
                        Where I learned best practices for designing powerful mobile-friendly websites and applications.
                        I currently work part-time as an IT Technician for a small real-estate business in Chapel Hill.</p>
                </div>
            </div>
            <div className="techSkills">
                <h4>Technical Skills</h4>
                <ul>
                    <li><b>Programming Languages:</b> HTML, CSS, SASS, JavaScript</li>
                    <li><b>Database:</b> MySQL, MongoDB </li>
                    <li><b>Library / Frameworks:</b> React.js, jQuery, Bootstrap, Jest </li>
                    <li><b>Other Tech:</b> Node.js, Handlebars.js, Git </li>
                </ul>
                <a href={resume} target='_blank' rel="noopener noreferrer" className="resumeLink"><button className="btn"
                    id="aboutResumeBtn" type="submit">Download my resume:
                    <i className="fa fa-download resume"></i></button></a>
            </div>
        </div>
    )
}
