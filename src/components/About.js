import React from 'react'
import chucknorris from '../images/chucknorris.png';
import harrypotter from '../images/harrypotter.png';
import nasa from '../images/nasa.png';
import github from '../images/greygithub.png';
import linkedin from '../images/greylinkedin.png';


export default function About() {
    return (
        <div className="about__container">
            <div className="about__content">
                <h1 className="about__header">ABOUT ME</h1>
                <div className="about__intro">
                    <p>Trainee Junior Developer learning Javascript, React & Node JS</p>
                    <p>I have a great eye for detail with UX key focus on designs built</p>
                </div>
                <div className="about__images">
                    <img className="about__image" src={chucknorris} alt="chucknorris-screenshot" />
                    <img className="about__image" src={harrypotter} alt="harrypotter-screenshot" />
                    <img className="about__image" src={nasa} alt="nasa-screenshot" />
                </div>
                <div className="about__logos">
                    <div class = "linkedin">
                        <a href="https://uk.linkedin.com/in/emma-sheridan-47963376" target="blank">
                        <img src={linkedin} alt="Linkedin" />
                        </a>
                    </div>
                    <div class = "github">
                        <a href="https://github.com/mealouise" target="blank">
                        <img src={github} alt="Github" />
                    </a>
                    </div>
                </div>
            </div>
                
        </div>
    )
}
