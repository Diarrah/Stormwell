import React, { useEffect, useContext } from 'react';
import { StormwellContext } from '../App.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { affordable, organic, premium, woman, corner } from '../images/about';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const { heroEl, aboutEl } = useContext(StormwellContext);

    useEffect(() => {
        gsap.to('.about__textbox', {
            scrollTrigger: {
                trigger: heroEl.current,
                start: "center top",
            }, y: 120, duration: 2, opacity: 1, ease: "bounce.in"
        })
    }, [])

    return (
        <section className="about" id="about" ref={aboutEl}>
            <p className="about__textbox">Stormwell is a new vodka company from California's Bay Area. <br />
            Our company is about the combination of the best ingredients & processes in order to put our best foot forward into the market this <span>coming February 2021</span>.
            </p>
            <div className="about__icon__grid">
                <img className="corner" src={corner} alt="" />
                <div className="icon__grid__item">
                    <div className="item__img__container">
                        <img className="icon icon--premium" src={premium} alt="Symbol signifying premium quality ingredients" />
                    </div>
                    <div className="item__textbox">
                        <h3 className="textbox__heading">Premium</h3>
                        <p className="textbox__subheading">Distilled 6x & filtered 5x <br /> for a neutral character, nearly no-taste vodka.</p>
                    </div>
                </div>
                <div className="icon__grid__item">
                    <div className="item__img__container">
                        <img className="icon icon--affordable" src={affordable} alt="Piggy bank with coins" />
                    </div>
                    <div className="item__textbox">
                        <h3 className="textbox__heading">Affordable</h3>
                        <p className="textbox__subheading">The price is what makes Stormwell special! <br /> 25% less cost than vodka of the same quality.</p>
                    </div>
                </div>
                <div className="icon__grid__item">
                    <div className="item__img__container">
                        <img className="icon icon--organic" src={organic} alt="Symbol signifying organic ingredients" />
                    </div>
                    <div className="item__textbox">
                        <h3 className="textbox__heading">Organic</h3>
                        <p className="textbox__subheading">Distilled from 100% organic grain <br />No GMOs, synthetic pesticides, or chemical fertilizers.</p>
                    </div>
                </div>
                <div className="icon__grid__item">
                    <div className="item__img__container">
                        <img className="icon icon--woman" src={woman} alt="Woman side profile" />
                    </div>
                    <div className="item__textbox">
                        <h3 className="textbox__heading">Woman owned</h3>
                        <p className="textbox__subheading">Stormwell joins only 36% of alcohol companies in the US that are owned by women.</p>
                    </div>
                </div>
            </div>
            <svg className="wave wave--1" width="660" height="135" viewBox="0 0 660 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 123.268C37.0286 162.806 78.0613 -6.07854 184.146 80.9057C290.23 167.89 357.283 -73.2936 482.883 24.9873C583.363 103.612 622.828 130.423 630 134" stroke="#FF8B60"/>
                <path d="M31 109.234C67 144.234 108 -5.26605 214 71.7339C320 148.734 387 -64.766 512.5 22.234C612.9 91.834 652.333 115.567 659.5 118.734" stroke="#FF8B60"/>
                <line x1="49" y1="67.5" x2="613.001" y2="67.5" stroke="#FF8B60"/>
            </svg>
        </section>
    )
}

export default About