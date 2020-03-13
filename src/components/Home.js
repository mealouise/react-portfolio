import React from 'react';
import profile from '../images/profile.jpeg';
import {Link} from 'react-router-dom';


export default function Home(props) {
    return (
        <div>
            <div className="home__intro" >
                <div className="home__introduction">
                    <h1 className="home__header">Hi, I'm Emma,</h1>
                    <h2 className="home__description">A trainee Junior Javascript Web Developer<br/> at Code Nation</h2>
                    <div className="profile__image">
                    <img src={profile} alt="profile-screenshot" />
                    </div>
                </div>
                <div className="home__content">
                    <div className="home__aboutme">
                        <p>I have a great eye for detail with UX key focus on website designs built<br/>Check out my <Link to="/about" className="home__portfoliolink">Porfolio</Link></p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
