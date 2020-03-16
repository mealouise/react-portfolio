import React from 'react';
import harrypotter from '../images/harrypotter.png';
import nasa from '../images/nasa.png';
import github from '../images/greygithub.png';
import linkedin from '../images/greylinkedin.png';
import '../css/Portfolio.css';
import northernfail from '../images/northernfail.png';
import todolist from '../images/todolist.png';
import cocktail from '../images/cocktail.png';
import rugby from '../images/rugby.png';


export default function About() {
    return (
        <div className="about__container">
            <div className="about__content">
                <h1 className="about__header">PORTFOLIO</h1>
                <ul className="about__images">
                    <li className="about__portfolio"> 
                        <h5>Northern Fail</h5>
                        <img className="home__dicegame" src={northernfail} alt="northernfail-screenshot" />
                    </li>
                    <li className="about__portfolio">
                        <h5>To do List JS</h5>
                        <img className="home__dicegame" src={todolist} alt="todolist-screenshot" />
                    </li>
                    <li className="about__portfolio">
                        <h5>Rugby Scoreboard JS</h5>
                        <img className="home__dicegame" src={rugby} alt="todolist-screenshot" />
                    </li>
                    <li className="about__portfolio">
                        <h5>Cocktail API Node JS</h5>
                        <img className="home__dicegame" src={cocktail} alt="cocktail-screenshot" />
                    </li>
                    <li className="about__portfolio">
                        <h5>Harry Potter API Node JS</h5>
                        <img className="home__dicegame" src={harrypotter} alt="harrypotter-screenshot" />
                    </li>
                    <li className="about__portfolio">
                        <h5>Nasa API Node JS</h5>
                        <img className="about__image" src={nasa} alt="nasa-screenshot" />
                    </li>
                
                </ul>
                {/* <div className="about__logos">
                    <div class = "linkedin">
                        <a href="https://uk.linkedin.com/in/emma-sheridan-47963376" target="blank">
                        <img src={linkedin} alt="Linkedin" />
                        </a>
                    </div>
                    <div class = "github">
                        <a href="https://github.com/mealouise" target="blank">
                        <img src={github} alt="Github" />
                    </a>
                    </div> */}
                {/* </div> */}
            </div>
                
        </div>
    )
}
