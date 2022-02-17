import './Navbar.css';
import React, { useState, useEffect } from "react"

export default function Navbar() {

    const [navbar, setNavbar] = useState(false)

    const changeBackground = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 66) {
        
        setNavbar(true)
        } else {
        setNavbar(false)
        }
    }
    
    useEffect(() => {
        changeBackground()
        window.addEventListener("scroll", changeBackground)
    })

    return (
        <nav>
            <div class={navbar ? "navbarStarting" : "navbar"}>
                <ul>
                    <li><a class="navbarLeft" href="#">Work</a></li>
                    <li><a class="navbarLeft" href="#">Insights</a></li>
                    <li><a class="navbarLeft" href="#">About</a></li>
                    <li><a class="navbarMiddle" href="#">JOURNEYS</a></li>
                    <li><a class="navbarRight" href="#">Careers</a></li>
                    <li><a class="navbarRight" href="#">Academy</a></li>
                    <li><a class="navbarRight" href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
};