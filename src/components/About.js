import { Link } from 'react-router-dom';
import './About.css';

export default function About () {
    return (
        <div id="about" className="about-container">
            
            <div className="about-content">
                <div className="about">
                    <div className="header">
                        <span>About</span>
                    </div>
                </div>
                <div className="languages">
                    <div className="header">
                        <span>Languages</span>
                    </div>
                </div>
                <div className="skills">
                    <div className="header">
                        <span>Skills</span>
                    </div>
                </div>
                <div className="education">
                    <div className="header">
                        <span>Education</span>
                    </div>
                </div>
            </div>
        </div>
    )
}