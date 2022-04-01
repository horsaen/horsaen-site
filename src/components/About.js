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
                            <li className="bullet"><span>English |<span className="span-2"> C2</span></span></li>
                            <li className="bullet"><span>French |<span className="span-2"> B2</span></span></li>
                            <li className="bullet"><span>Indonesian |<span className="span-2"> A2</span></span></li>
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
                    <div className="edu-container">
                        <div className="edu-left">
                            <div className="card">
                                <div className="title">
                                    <span>Sigourney CSD</span>
                                </div>
                                <div className="subtitle-2">
                                    <span>Sept 2019 - Present</span>
                                </div>
                            </div>
                        </div>
                        <div className="edu-right">
                            <div className="description">
                                <div className="title">
                                    <span>Technology club president</span>
                                </div>
                                <div className="description-text">
                                    <span>Provided quality knowledge of technology to students, 
                                        including valuable skills such as the repair of computer
                                         systems and programming languages.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}