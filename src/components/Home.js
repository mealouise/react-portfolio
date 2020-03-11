import React from 'react';
import dicegame from '../images/dicegame.png';


export default function Home(props) {
    return (
        <div className="home__intro" >
            <div>
                <h1 className="home__header">Hi, I'm Emma</h1>
                <h2 className="home__description">A trainee Junior Javascript Web Developer at Code Nation</h2>
            </div>
            <div>
                <h3 className="home__portfolio">Portfolio</h3>
                <ul className="home__projects">
                    <li>Dice Game JS</li>
                    <img className="home__dicegame" src={dicegame} />
                    <li>Rugby Scoreboard JS</li>
                    <li>To do list JS</li>
                    <li>Weather API Node</li>
                    <li>Mem project Node</li>
                </ul>
            </div>
        </div>
    )
}
