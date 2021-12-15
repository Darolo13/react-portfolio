import { useState } from 'react'
import './contact_01.scss'
// import './contact.scss'

export default function Contact() {
    const [message, setMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    };

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact Me!</h2>
                <p>If you like my work let's talk about it</p>
                <a href='mailto:davidromero1244@gmail.com' className='sendMail'>
                    <button>
                        <i class="far fa-envelope fa-3x"></i>
                    </button>
                </a>

                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/davidromero-l/">
                            <i class="fab fa-linkedin fa-3x"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Darolo13">
                            <i class="fab fa-github fa-3x"></i>
                        </a>
                    </li>


                </ul>
            </div>
        </div>
    );
}
