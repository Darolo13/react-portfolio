import './topbar.scss'
import { Mail, Person } from '@material-ui/icons'

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Darolo</a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>+00 000 00 00</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>daro@example.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
