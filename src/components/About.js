import './About.css';

export default function About () {
    return (
        <div id="about" className="about-container">
            <div className="about">
                <div className="card">
                    <div className="title">
                        <span>About</span>
                    </div>
                </div>
                <div className="card">
                    <div className="title">
                        <span>Languages</span>
                    </div>
                    <div className="description">
                        <ul className="desc">
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
                            </div>
                        </div>
                        <div className="description-right">
                            <div className="desc-title">
                                <span>Frontend Developer</span>
                            </div>
                            <div className="desc">
                                <span>test</span>
                                <br />
                                <span>estsetST</span>
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
                                <span>Technology club president</span>
                            </div>
                            <div className="desc">
                                <span>TEstsetS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}