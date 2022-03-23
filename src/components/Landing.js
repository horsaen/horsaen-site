import { Link } from 'react-router-dom';
import './Landing.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Landing() {
    return (
        <div className="landing-container">
            <div className="landing-nav-container">
                <div className="landing-text">
                    <span>Hey, I'm<br/></span><span className="span-2">Horsaën</span><span> ^w^</span>
                </div>
                <AnchorLink href='#about-container' className="landing-btn">
                    <span className="landing-btn-text">Learn More</span>
                </AnchorLink>
            </div>
        </div>
    )
}