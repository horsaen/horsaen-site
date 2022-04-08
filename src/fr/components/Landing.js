import { Link } from 'react-router-dom';
import '../../components/Landing.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'


import { GoMarkGithub } from 'react-icons/go';
import { HiMail } from 'react-icons/hi';
import { BsLinkedin } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
 
export default function Landing() {
    return (
        <div className="landing-container">
            <div className="sidebar">
                <ul>
                    <li>
                        <a href="https://github.com/horsaen/" target="_blank">
                            <GoMarkGithub />
                        </a>
                    </li>
                    <li>
                        <a href="mailto:atealltheglue@protonmail.com" target="_blank">
                            <HiMail />
                        </a>
                    </li>
                    <li>
                        <a href="https://linkedin.com/in/horsain" target="_blank">
                            <BsLinkedin />
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com/ihatepapertowel" target="_blank">
                            <BsInstagram />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="landing-nav-container">
                <div className="landing-text">
                    <span>Moi c'est<br/></span><span className="span-2">Cameron</span><span> ^w^</span>
                </div>
                <AnchorLink href='#about' className="landing-btn">
                    <span className="landing-btn-text">En Savoir Plus</span>
                </AnchorLink>
            </div>
        </div>
    )
}