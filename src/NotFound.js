import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
    return (
        <div className="page-container">
            <div className="notfound-header">
                <span>this site can't be reached :((</span>
            </div>
            <Link to="/">
                <div className="button">
                    <span>Return home !!</span>
                </div>
            </Link>
        </div>
    )
}