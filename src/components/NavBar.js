import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { FaBars, FaTimes, FaWineBottle,FaDiceSix} from 'react-icons/fa'
import { Button } from './Button';
import "./NavBar.css"
import { IconContext } from "react-icons/lib"
import About from "./pages/HomePage/About"
import Random from "./pages/HomePage/Random"


export default function NavBar() {

    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    const showButton = () => {
        if(window.innerWidth <= 960 ) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener("resize", showButton);


    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                        <FaWineBottle className="navbar-icon"/>
                        fæl
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars/>}
                    </div>
                    <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item" onClick={handleClick}>
                            <Link to='/Random' className="nav-links" onClick={closeMobileMenu}>Hjem</Link>
                        </li>
                        <li className="nav-item" onClick={handleClick}>
                            <Link to='/About' className="nav-links" onClick={closeMobileMenu}>About</Link>
                        </li>
                        <li className="nav-item" onClick={handleClick}>
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>Sheesh</Link>
                        </li>
                        <li className="nav-btn">
                            {button ? (
                                <Link to="/random" className="btn-link">
                                    <Button buttonStyle='btn-outline'>Random!</Button>
                                </Link>
                            ): (
                                <Link to="/sign-up" className="btn-link">
                                    <Button buttonStyle = 'btn--outline'
                                    buttonSize = 'btn--mobile'>
                                        SIGN UP</Button>
                                </Link>
                            )
                        }
                        </li>

                    </ul>
                    
                    
                </div> 
                
            </div>
            </IconContext.Provider>
        </>
    )
}
