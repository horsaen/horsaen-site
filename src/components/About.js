import './About.css';

/* Icon imports */
import Cisco from "../assets/Cisco.png";
import CSS from "../assets/CSS.png";
import HTML from "../assets/HTML.png";
import JS from "../assets/JS.png";
import Manjaro from "../assets/Manjaro.png";
import React from "../assets/React.png";
import Svelte from "../assets/Svelte.png";
import Ubuntu from "../assets/Ubuntu.png";
import Windows from "../assets/Windows.png";

export default function About () {
    return (
        <div id="about" className="about-container">
            <div className="about">
                <div className="card">
                    <div className="title">
                        <span>About</span>
                    </div>
                    <div className="desc">
                        <span>
                            Ever since a very young age, I have always been captivated by technology and am always learning the many 
                            applications of technology. At the age of 12 I built my own computer and jailbroke my phone. At 15 I set 
                            up my own server and I am now working with commercial-grade networking hardware, all with no formal training.
                        </span>
                    </div>
                </div>
                <div className="card">
                    <div className="title">
                        <span>Languages</span>
                    </div>
                    <div className="description">
                        <div className="subtitle">
                            <a href="https://www.coe.int/en/web/common-european-framework-reference-languages/" target="_blank" rel="noreferrer">
                                Based on the CEFR language framework
                            </a>
                        </div>
                        <ul className="list">
                            <li><span>English | <span className="span-2">C2</span></span></li>
                            <li><span>French | <span className="span-2">B2</span></span></li>
                            <li><span>Indonesian | <span className="span-2">A2</span></span></li>
                        </ul>
                    </div>
                </div>
                <div className="card">
                    <div className="title">
                        <span>Experience</span>
                    </div>
                    <div className="description-container">
                        <div className="description-left">
                            <div className="desc-title">
                                <span>Acauntertous</span>
                            </div>
                            <div className="desc">
                                <span>Nov 2021 - Present</span>
                                <br />
                                <span>
                                    French NPO focused on the promotion and preservation 
                                    of the Norman language.
                                </span>
                            </div>
                        </div>
                        <div className="description-right">
                            <div className="desc-title">
                                <span>Frontend Developer</span>
                            </div>
                            <div className="desc">
                                <span>
                                    Spearhead the development and hosting of Acauntertous' website 
                                    in a way which is satisfying to administration
                                </span>
                                <br />
                                <span>
                                    Allow for effective communication between different 
                                    elements of the development team
                                </span>
                            </div>
                        </div>
                    </div>  
                </div>
                <div className="card">
                    <div className="title">
                        <span>Education</span>
                    </div>
                    <div className="description-container">
                        <div className="description-left">
                            <div className="desc-title">
                                <span>Sigourney CSD</span>
                            </div>
                            <div className="desc">
                                <span>Sept 2019 - Present</span>
                            </div>
                        </div>
                        <div className="description-right">
                            <div className="desc-title">
                                <span>Technology Club President</span>
                            </div>
                            <div className="desc">
                                <span>
                                    Provide a high quality knowledge of technology to students, including the knowledge required to be 
                                    successful in the IT world, such as the abilies to use enterprise-grade technology and to troubleshoot 
                                    problems found in a wide range of technology.
                                </span>
                                <br />
                                <span>
                                    Provisioning of both enterprise hardware, along with consumer technology, in order to give students a large 
                                    base of experience.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="title">
                        <span>Skills</span>
                    </div>
                    <div className="desc">
                        <span>
                            The ability to diagnose and troubleshoot problems quickly
                            and efficiently
                        </span>
                        <br />
                        <span>
                            The ability to use and manage enterprise-grade hardware, 
                            such as servers and enterprise networking
                        </span>
                        <br />
                        <span>
                            The ability to use a CLI
                        </span>
                        <br />
                        <span>
                            The ability to quickly learn how to fix a problem effectively
                        </span>
                    </div>
                    <div className="skills">
                        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noreferrer">
                            <img src={HTML} alt=""></img>
                        </a>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noreferrer">
                            <img src={CSS} alt=""></img>
                        </a>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
                            <img src={JS} alt=""></img>
                        </a>
                        <span>|</span>
                        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                            <img src={React} alt=""></img>
                        </a>
                        <a href="https://svelte.dev/" target="_blank" rel="noreferrer">
                            <img src={Svelte} alt=""></img>
                        </a>
                        <span>|</span>
                        <a href="https://www.microsoft.com/en-us/windows">
                            <img src={Windows} alt=""></img>
                        </a>
                        <a href="https://ubuntu.com/" target="_blank" rel="noreferrer">
                            <img src={Ubuntu} alt=""></img>
                        </a>
                        <a href="https://manjaro.org/" target="_blank" rel="noreferrer">
                            <img src={Manjaro} alt=""></img>
                        </a>
                        <span>|</span>
                        <a href="https://www.cisco.com/" target="_blank" rel="noreferrer">
                            <img src={Cisco} alt=""></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}