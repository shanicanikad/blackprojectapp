import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Nav.css'

function Nav() {
    return (
        <div className= "whole">
            <div className="header">
                <h4>BLACK LIVES MATTER</h4>
            </div>
            <nav>
                <ul>
                <button className= 'navButton'><Link className= 'change' to='/'>Home</Link></button>
                <button className= 'navButton'><Link className= 'change' to='/menswear'>Men's</Link></button>
                <button className= 'navButton'><Link className= 'change' to='/womenswear'>Women's</Link></button>
                <button className= 'navButton'><Link className= 'change' to='/create'>Create Brand</Link></button>
            </ul>
           </nav>
        </div>
    )
}

export default Nav