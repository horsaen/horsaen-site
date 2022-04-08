import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
    return (
        <div className="page-container">
            <div className="notfound-container">
                <div className="notfound-header">
                <span>this site can't be reached :((</span>
            </div>
            <Link className="button" to="/">
                <span>return home instead ? :)</span>
            </Link>
            </div>
        </div>
    )
}