import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
        <div className="navbar-container">
            <div className="navbar-left">
                <Link to='/'>Horsaën</Link>
            </div>
            <div className="navbar-right">
                <Link to='/fr'>FR</Link>
            </div>
        </div>
    )
}