import { Link } from 'react-router-dom';
import './About.css';

export default function About () {
    return (
        <div id="about" className="about-container">
            
            <div className="about-content">
                <div className="about">
                    <div className="header">
                        <span className="header-text">About</span>
                    </div>
                </div>
                <div className="languages">
                    <div className="header">
                        <span className="header-text">Languages</span>
                        <div>
                            <a href="https://www.coe.int/en/web/common-european-framework-reference-languages/table-1-cefr-3.3-common-reference-levels-global-scale" className="subtitle" target="_blank">
                                <span>Based on the CEFR Framework</span>
                            </a>
                        </div>  
                    </div>
                    <div className="content">
                        <ul>
                            <li><span>English |<span className="span-2"> C2</span></span></li>
                            <li><span>French |<span className="span-2"> B2</span></span></li>
                            <li><span>Indonesian |<span className="span-2"> A2</span></span></li>
                        </ul>
                    </div>
                </div>
                <div className="skills">
                    <div className="header">
                        <span className="header-text">Skills</span>
                    </div>
                </div>
                <div className="education">
                    <div className="header">
                        <span className="header-text">Education</span>
                    </div>
                </div>
            </div>
        </div>
    )
}