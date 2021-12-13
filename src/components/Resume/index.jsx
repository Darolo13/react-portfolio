import { useEffect } from 'react'
import './resume.scss'
import resume from '../../assets/resume.pdf';

export default function Resume() {
    return (
        <div className="resume" id="resume">
            <h2>About Me</h2>
            <div className="left">

                <div className="summary">
                    <h2>Resume</h2>
                    <p>Hello, I'm a Full Stack Developer with knowledge in MERN Stack and responsive web development. Recently,
                        I Attended the University of Arizona Coding Bootcamp where I received a Certifcate in Full Stack Web Development.
                        Where I learned best practices for designing powerful mobile-friendly websites and applications.</p>
                </div>
            </div>
            <div className="right">
            <div className="tech-skills">
                <h4>Technical Skills</h4>
                <ul>
                    <li><b>Programming Languages:</b> HTML, CSS, SASS, JavaScript</li>
                    <li><b>Database:</b> MySQL, MongoDB </li>
                    <li><b>Library / Frameworks:</b> React.js, jQuery, Bootstrap, Jest </li>
                    <li><b>Other Tech:</b> Node.js, Handlebars.js, Git </li>
                </ul>
                <a href={resume} target='_blank' rel="noopener noreferrer" className="resumeLink">
                    <button>Download my resume <i class="fas fa-download"></i>
                    </button>
                </a>
            </div>
                        </div>
        </div>
    )
}