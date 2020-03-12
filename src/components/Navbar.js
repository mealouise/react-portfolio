import React from 'react'
import {Link} from 'react-router-dom';


export default function Navbar() {
    return (
        <nav>
            <Link to="/"><h1 className="navbar__header">Emma Sheridan</h1></Link>
            <ul>
                {/* <li>HOME</Link></li> */}
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
            </ul>
        </nav>
    )
}
