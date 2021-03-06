import React from 'react';
import harrypotter1 from '../images/harrypotter1.png';
import nasa from '../images/nasa.png';
import nasa1 from '../images/nasa1.png';
import github from '../images/greygithub.png';
import linkedin from '../images/greylinkedin.png';
import '../css/Portfolio.css';
import northernfail1 from '../images/northernfail1.png'
import todolist1 from '../images/todolist1.png';
import cocktail1 from '../images/cocktail1.png';
import rugbyscoreboard1 from '../images/rugbyscoreboard1.png';


export default function Portfolio() {
    return (
        <div className="about__container">
            <div className="about__content">
                <h1 className="about__header">PORTFOLIO</h1>
                <ul className="about__images">
                    <li className="about__portfolio"> 
                        <h5>Northern Fail</h5>
                        <img className="home__screenshot" src={northernfail1} alt="northernfail-screenshot" />
                    </li>
                    <li className="about__portfolio">
                        <h5>To do List JS</h5>
                        <img className="home__screenshot" src={todolist1} alt="todolist-screenshot" />
                    </li>
                    <li className="about__portfolio">
                        <h5>Rugby Scoreboard JS</h5>
                        <img className="home__screenshot" src={rugbyscoreboard1} alt="todolist-screenshot" />
                    </li>
                    <li className="about__portfolio">
                        <h5>Cocktail API Node JS</h5>
                        <img className="home__screenshot" src={cocktail1} alt="cocktail-screenshot" />
                    </li>
                    <li className="about__portfolio">
                        <h5>Harry Potter API Node JS</h5>
                        <img className="home__screenshot" src={harrypotter1} alt="harrypotter-screenshot" />
                    </li>
                    <li className="about__portfolio">
                        <h5>Nasa API Node JS</h5>
                        <img className="home__screenshot" src={nasa1} alt="nasa-screenshot" />
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
