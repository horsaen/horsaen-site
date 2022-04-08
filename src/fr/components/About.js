import '../../components/About.css';

/* Icon imports */
import Cisco from "../../assets/Cisco.png";
import CSS from "../../assets/CSS.png";
import HTML from "../../assets/HTML.png";
import JS from "../../assets/JS.png";
import Manjaro from "../../assets/Manjaro.png";
import React from "../../assets/React.png";
import Svelte from "../../assets/Svelte.png";
import Ubuntu from "../../assets/Ubuntu.png";
import Windows from "../../assets/Windows.png";

export default function About () {
    return (
        <div id="about" className="about-container">
            <div className="about">
                <div className="card">
                    <div className="title">
                        <span>À propos</span>
                    </div>
                    <div className="desc">
                        <span>
                        Depuis que j'étais petit, j'étais toujours captivé par la technologie et j'apprends toujours ses applications. 
                        À l'âge de 12 ans j'ai fait mon propre ordinateur et j'ai jailbreaké mon téléphone. À l'âge de 15 ans j'ai fait 
                        un serveur et j'ai travaillé avec le matériel réseau d'entreprise, tout sans formation formelle.
                        </span>
                    </div>
                </div>
                <div className="card">
                    <div className="title">
                        <span>Langues</span>
                    </div>
                    <div className="description">
                        <div className="subtitle">
                            <a href="https://www.coe.int/en/web/common-european-framework-reference-languages/" target="_blank">
                                Basé sur le cadre CEFR 
                            </a>
                        </div>
                        <ul className="list">
                            <li><span>Anglais | <span className="span-2">C2</span></span></li>
                            <li><span>Français | <span className="span-2">B2</span></span></li>
                            <li><span>Indonésien | <span className="span-2">A2</span></span></li>
                        </ul>
                    </div>
                </div>
                <div className="card">
                    <div className="title">
                        <span>Éxperience</span>
                    </div>
                    <div className="description-container">
                        <div className="description-left">
                            <div className="desc-title">
                                <span>Acauntertous</span>
                            </div>
                            <div className="desc">
                                <span>Nov 2021 - Présent</span>
                                <br />
                                <span>
                                    OSBL dédié à la préservation et promotion de la langue Normand.
                                </span>
                            </div>
                        </div>
                        <div className="description-right">
                            <div className="desc-title">
                                <span>Développeur Frontend</span>
                            </div>
                            <div className="desc">
                                <span>
                                    Dirigé le développement et hébergement du site web de Acauntertous d'une manière satisfaisant 
                                    pour l'administration
                                </span>
                                <br />
                                <span>
                                    Permet de communication efficace entre les éléments différents de l'équipe de développement
                                </span>
                            </div>
                        </div>
                    </div>  
                </div>
                <div className="card">
                    <div className="title">
                        <span>Éducation</span>
                    </div>
                    <div className="description-container">
                        <div className="description-left">
                            <div className="desc-title">
                                <span>Sigourney CSD</span>
                            </div>
                            <div className="desc">
                                <span>Sept 2019 - Présent</span>
                            </div>
                        </div>
                        <div className="description-right">
                            <div className="desc-title">
                                <span>Président du club informatique et technologique</span>
                            </div>
                            <div className="desc">
                                <span>
                                    Fournir une connaissance de haute-qualité de la technologie aux étudiants, y compris les connaissances requises 
                                    pour réussir dans le monde de IT, comme l'utilisation du matériel informatique entreprise et la compétence a 
                                    dépanner des problèmes trouves dans un large éventail de technologie.
                                </span>
                                <br />
                                <span>
                                    L'approvisionnement du matériel d'entreprise et du matériel des consommateurs pour donner aux étudiants un large 
                                    éventail d'expérience.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="title">
                        <span>Compétances</span>
                    </div>
                    <div className="desc">
                        <span>
                            La capacité de diagnostiquer et dépanner des problèmes rapidement et efficacement
                        </span>
                        <br />
                        <span>
                            La capacité d'utiliser et gérer les matériels entreprises, genre des serveurs et des matériels réseaux
                        </span>
                        <br />
                        <span>
                            La capacité d'utiliser une ILC
                        </span>
                        <br />
                        <span>
                            La capacité d'apprendre rapidement comment résoudre un problème
                        </span>
                    </div>
                    <div className="skills">
                        <img src={HTML}></img>
                        <img src={CSS}></img>
                        <img src={JS}></img>
                        <span>|</span>
                        <a href="https://reactjs.org/" target="_blank">
                            <img src={React}></img>
                        </a>
                        <a href="https://svelte.dev/" target="_blank">
                            <img src={Svelte}></img>
                        </a>
                        <span>|</span>
                        <img src={Windows}></img>
                        <a href="https://ubuntu.com/" target="_blank">
                            <img src={Ubuntu}></img>
                        </a>
                        <a href="https://manjaro.org/" target="_blank">
                            <img src={Manjaro}></img>
                        </a>
                        <span>|</span>
                        <a href="https://www.cisco.com/" target="_blank">
                            <img src={Cisco}></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}