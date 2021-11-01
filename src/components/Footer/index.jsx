import github from '../../assets/icons8-github.gif'
import linkedin from '../../assets/icons8-linkedin.gif'

export default function Footer() {
    return (
        <footer className="footer bg-dark fixed-bottom">
            <a href="https://github.com/Darolo13"><img src={github} height='48' width="48" alt="Github" className="icon" /></a>
            <a href="https://www.linkedin.com/in/davidromero-l/"><img src={linkedin} height='48' width='48' alt="LinkedIn" className="icon" /></a>
        </footer>
    )
}
