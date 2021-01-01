import React, { useEffect, useContext } from 'react';
import { StormwellContext } from '../App';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logo from '../images/logo.svg';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
    const { navbarEl, heroEl , aboutEl, recipeEl } = useContext(StormwellContext);

    useEffect(() => {
        gsap.to('.navbar', {
            scrollTrigger: {
                trigger: heroEl.current,
                start: "bottom-=25% top",
                scrub: true
            },
            transform: "translateY(0%)"
        })

        gsap.to('.navbar__links', {
            scrollTrigger: {
                trigger: aboutEl.current,
                scrub: true
            }, className: "+=navbar__links navbar__links--about"
        })

        gsap.to('.navbar__links', {
            scrollTrigger: {
                trigger: recipeEl.current,
                scrub: true
            }, className: "+=navbar__links navbar__links--recipe"
        })

        gsap.to('.navbar__links', {
            scrollTrigger: {
                trigger: recipeEl.current,
                start: "bottom+=100 top",
                scrub: true
            }, className: "+=navbar__links navbar__links--contact"
        })
    }, [])

    return (
        <nav className="navbar" ref={navbarEl}>
            <img className="navbar__logo" src={logo} alt="Stormwell company logo" onClick={() => window.scrollTo(0, 0)} />
            <ul className="navbar__links">
                <li className="links__item links__item--about"><a href="#about">About</a></li>
                <li className="links__item links__item--recipe"><a href="#recipe">Recipes</a></li>
                <li className="links__item links__item--contact"><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar