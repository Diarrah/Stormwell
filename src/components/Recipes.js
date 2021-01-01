import React, { useEffect, useContext } from 'react';
import { StormwellContext } from '../App';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { spring, summer, fall, winter } from '../images/cocktails';

gsap.registerPlugin(ScrollTrigger);

const Recipes = () => {
    const { recipeEl } = useContext(StormwellContext);

    useEffect(() => {
      const timeline = gsap.timeline({
           scrollTrigger: {
               trigger: '.recipe-container',
               start: "top top",
               pin: true,
               scrub: true
           }
       });

       timeline.to('.recipe--1 > .recipe__img__container', { duration: .5, x: "-25vw", transform: "scale(.65)" })
               .to('.recipe--1 > .recipe__textbox', { opacity: 0, transform: "scale(.5)" }, '-=.35')
               .to('.recipe--2 > .recipe__img__container', { opacity: 1 }, '-=.2')
               .to('.hexagon-outline', { stroke: "#F60C17", duration: .1 }, '<')
               .fromTo('.recipe--2 > .recipe__textbox', { opacity: 0, transform: "scale(.5)" }, { opacity: 1, transform: "scale(1)" }, '<')
               .to('.recipe--2 > .recipe__img__container', { duration: .5, x: "-25vw", transform: "scale(.65)" })
               .to('.recipe--2 > .recipe__textbox', { opacity: 0, transform: "scale(.5)" }, '-=.35')
               .to('.recipe--3 > .recipe__img__container', { opacity: 1 }, '-=.2')
               .to('.hexagon-outline', { stroke: "#BF2E00", duration: .1 }, '<')
               .fromTo('.recipe--3 > .recipe__textbox', { opacity: 0, transform: "scale(.5)" }, { opacity: 1, transform: "scale(1)" }, '<')
               .to('.recipe--3 > .recipe__img__container', { duration: .5, x: "-25vw", transform: "scale(.65)" })
               .to('.recipe--3 > .recipe__textbox', { opacity: 0, transform: "scale(.5)" }, '-=.35')
               .to('.recipe--4 > .recipe__img__container', { opacity: 1 }, '-=.2')
               .to('.hexagon-outline', { stroke: "#552617", duration: .1 }, '<')
               .fromTo('.recipe--4 > .recipe__textbox', { opacity: 0, transform: "scale(.5)" }, { opacity: 1, transform: "scale(1)" }, '<')
    }, [])

    return (
        <section className="recipe-container" id="recipe" ref={recipeEl}>
            <div className="recipe-container__textbox">
                <p className="textbox__text">We can do a lot more than a Moscow Mule!<br />Our team has curated a list of our favorite cocktails for you to enjoy all year long.</p>
                {/* <svg className="textbox__corner textbox__corner--1" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.198971 0.950592L0.195709 20.9802H11.6629V12.4001H20.1957V0.950592H0.198971ZM7.22844 8.0067H4.56162V5.34399H7.22844V8.0067Z" fill="#FF8B60"/>
                </svg>
                <svg className="textbox__corner textbox__corner--2" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.1924 20.9802L20.1957 0.950597H8.72849V9.53062H0.195709V20.9802H20.1924ZM13.163 13.9241H15.8298V16.5868H13.163V13.9241Z" fill="#FF8B60"/>
                </svg> */}
            </div>
                <div className="recipe-container__img__container">
                <svg className="hexagon" width="512" height="522" viewBox="0 0 512 522" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="1440" height="1024" transform="translate(-464 -251)" fill="white" />
                    <g clipPath="url(#clip0)">
                        <path d="M485.291 134.408L261.291 6.40799C258.006 4.531 253.995 4.531 250.71 6.40799L26.71 134.408C23.382 136.307 21.334 139.848 21.334 143.667V378.334C21.334 382.153 23.382 385.694 26.71 387.593L250.71 515.593C252.353 516.532 254.166 517.001 256.001 517.001C257.836 517.001 259.649 516.532 261.292 515.593L485.292 387.593C488.62 385.694 490.668 382.153 490.668 378.334V143.667C490.667 139.848 488.619 136.307 485.291 134.408Z" fill="#FF8B60" />
                    </g>
                    <path className="hexagon-outline" d="M501.267 180.336L501.269 180.338C503.102 181.874 503.969 184.28 503.545 186.628C503.545 186.629 503.544 186.629 503.544 186.629L461.747 417.543C461.322 419.891 459.667 421.84 457.412 422.637L457.409 422.638L214.192 508.693L214.192 508.693C213.071 509.09 211.91 509.175 210.782 508.971C209.654 508.767 208.596 508.28 207.686 507.515L207.685 507.515L10.0659 341.664L10.064 341.663C8.23085 340.126 7.36469 337.72 7.78968 335.372L49.5875 104.458C50.0125 102.11 51.6671 100.16 53.9225 99.3634L53.9249 99.3626L297.142 13.3072C297.142 13.3072 297.142 13.3072 297.142 13.3072C299.373 12.5177 301.835 12.9633 303.648 14.4849C303.648 14.4849 303.648 14.4849 303.648 14.485L501.267 180.336Z" stroke="#2F8A16" strokeWidth="8" />
                </svg>
            </div>
            <div className="recipe recipe--1">
                <div className="recipe__img__container">
                    <img src={spring} alt="Lemon Lime Minty Charmer" />
                </div>
                <div className="recipe__textbox">
                    <small>Our pick for <span>spring</span></small>
                    <h2 className="textbox__title">Lemon Lime Minty Charmer</h2>
                    <ul className="textbox__ingredients">
                        <li className="textbox__ingredients__item"><span>1½ oz.</span> Stormwell Vodka</li>
                        <li className="textbox__ingredients__item"><span>1 oz.</span> lime juice</li>
                        <li className="textbox__ingredients__item"><span>½ oz.</span> simple syrup</li>
                        <li className="textbox__ingredients__item"><span>splash</span> club soda</li>
                        <li className="textbox__ingredients__item">lemon mint</li>
                        <li className="textbox__ingredients__item">ice</li>
                    </ul>
                    <div className="textbox__tags">
                        <span>Low-calorie</span>
                        <span>Light</span>
                        <span>Minty</span>
                    </div>
                </div>
            </div>
            <div className="recipe recipe--2">
                <div className="recipe__img__container">
                    <img src={summer} alt="Madame's Beach House Vacation" />
                </div>
                <div className="recipe__textbox">
                    <small>Our pick for <span>summer</span></small>
                    <h2 className="textbox__title">Madame's Beach House Vacation</h2>
                    <ul className="textbox__ingredients">
                        <li className="textbox__ingredients__item"><span>2 oz.</span> Stormwell Vodka</li>
                        <li className="textbox__ingredients__item"><span>¼ cup</span> chilled watermelon juice</li>
                        <li className="textbox__ingredients__item"><span>1 tsp.</span> blood orange juice</li>
                        <li className="textbox__ingredients__item">agave honey</li>
                        <li className="textbox__ingredients__item">ice</li>
                    </ul>
                    <div className="textbox__tags">
                        <span>Sweet</span>
                        <span>Refreshing</span>
                        <span>Fruity</span>
                    </div>
                </div>
            </div>
            <div className="recipe recipe--3">
                <div className="recipe__img__container">
                    <img src={fall} alt="Cinnamon Side Car" />
                </div>
                <div className="recipe__textbox">
                    <small>Our pick for <span>fall</span></small>
                    <h2 className="textbox__title">Cinnamon Side Car</h2>
                    <ul className="textbox__ingredients">
                        <li className="textbox__ingredients__item"><span>2 oz.</span> Stormwell Vodka</li>
                        <li className="textbox__ingredients__item"><span>½ cup</span> apple cider vinegar</li>
                        <li className="textbox__ingredients__item"><span>½ cup</span> cinnamon simple syrup</li>
                        <li className="textbox__ingredients__item"><span>¼ cup</span> grapefruit juice</li>
                        <li className="textbox__ingredients__item"><span>1 oz.</span> orange juice</li>
                    </ul>
                    <div className="textbox__tags">
                        <span>Fizzy</span>
                        <span>Aromatic</span>
                        <span>Spicy</span>
                    </div>
                </div>
            </div>
            <div className="recipe recipe--4">
                <div className="recipe__img__container">
                    <img src={winter} alt="Czar's Henchman" />
                </div>
                <div className="recipe__textbox">
                    <small>Our pick for <span>winter</span></small>
                    <h2 className="textbox__title">Czar's Henchman</h2>
                    <ul className="textbox__ingredients">
                        <li className="textbox__ingredients__item"><span>1½ oz.</span> Stormwell Vodka</li>
                        <li className="textbox__ingredients__item"><span>1 oz.</span> espresso coffee</li>
                        <li className="textbox__ingredients__item"><span>2⁄3 oz.</span> coffee liqueur</li>
                        <li className="textbox__ingredients__item"><span>splash</span> liquid cane sugar</li>
                    </ul>
                    <div className="textbox__tags">
                        <span>Bitter</span>
                        <span>Robust</span>
                        <span>Simple</span>
                    </div>
                </div>
            </div>
            <svg className="wave wave--2" width="660" height="135" viewBox="0 0 660 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 123.268C37.0286 162.806 78.0613 -6.07854 184.146 80.9057C290.23 167.89 357.283 -73.2936 482.883 24.9873C583.363 103.612 622.828 130.423 630 134" stroke="#FF8B60"/>
                <path d="M31 109.234C67 144.234 108 -5.26605 214 71.7339C320 148.734 387 -64.766 512.5 22.234C612.9 91.834 652.333 115.567 659.5 118.734" stroke="#FF8B60"/>
                <line x1="49" y1="67.5" x2="613.001" y2="67.5" stroke="#FF8B60"/>
            </svg>
        </section>
    )
}

export default Recipes