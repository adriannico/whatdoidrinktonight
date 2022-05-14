import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { FaBars, FaTimes, FaWineBottle,FaDiceSix} from 'react-icons/fa'
import { Button } from './Button';
import "./NavBar.css"
import { IconContext } from "react-icons/lib"
import About from "./pages/HomePage/About"
import Random from "./pages/HomePage/Random"
import Home from "./pages/HomePage/Home"
import getRandomDrink from "./pages/HomePage/Random"



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
                    <Link to='/Home' className="navbar-logo" onClick={closeMobileMenu}>
                        <FaWineBottle className="navbar-icon"/>
                        wdidt
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars/>}
                    </div>
                    <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item" onClick={handleClick}>
                            <Link to='/Home' className="nav-links" onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className="nav-item" onClick={handleClick}>
                            <Link to='/About' className="nav-links" onClick={closeMobileMenu}>About</Link>
                        </li>
                        <li className="nav-item" onClick={handleClick}>
                            <Link to='/Search' className="nav-links" onClick={closeMobileMenu}>Search</Link>
                        </li>
                        <li className="nav-item" onClick={handleClick}>
                            <Link to='/Random' className="nav-links" onClick={closeMobileMenu}>Random</Link>
                        </li>
                        {/* <li className="nav-btn">
                            {button ? (
                                <Link to="/Random" className="btn-link">
                                    <Button onClick={closeMobileMenu}><p className="nav-links">Random!</p></Button>
                                </Link>
                            ): (
                                <Link to="/Random" className="btn-link">
                                    <Button onClick={closeMobileMenu} styles="padding: 20px; " buttonStyle = 'btn--outline'
                                    buttonSize = 'btn--mobile'>
                                        Random</Button>
                                </Link>
                            )
                        }
                        </li> */}

                    </ul>
                    
                    
                </div> 
                
            </div>
            </IconContext.Provider>
        </>
    )
}
