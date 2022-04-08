import { Link } from 'react-router-dom';
import '../../components/Navbar.css';

export default function Navbar() {
    return (
        <div className="navbar-container">
            <div className="navbar">
                <div className="navbar-left">
                    <Link to='/'>Horsaën</Link>
                </div>
                <div className="navbar-right">
                    <Link to='/'>EN</Link>
                </div>
            </div> 
        </div>
    )
}