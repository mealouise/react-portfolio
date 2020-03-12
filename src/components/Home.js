import React from 'react';
import dicegame from '../images/dicegame.png';
import rugbyscoreboard from '../images/rugbyscoreboard.png';
import cocktail from '../images/cocktail.png';
import northernfail from '../images/northernfail.png';
import todolist from '../images/todolist.png';


export default function Home(props) {
    return (
        <div className="home__intro" >
            <div>
                <h1 className="home__header">Hi, I'm Emma</h1>
                <h2 className="home__description">A trainee Junior Javascript Web Developer at Code Nation</h2>
            </div>
            <div className="home__content">
                <h3 className="home__portfolio">Portfolio</h3>
                <div className="home__screenshots">
                    <ul className="home__projects">
                        <div>
                            <li>Northern Fail </li>
                            <img className="home__dicegame" src={northernfail} alt="northernfail-screenshot" />
                        </div>
                        <div>
                            <li>To do List JS</li>
                            <img className="home__dicegame" src={todolist} alt="todolist-screenshot" />
                        </div>
                        <div>
                            <li>Mem project Node</li>
                            <img className="home__dicegame" src={cocktail} alt="cocktail-screenshot" />
                        </div>
                    </ul>
                </div>
            </div>
        </div>
        
    )
}
