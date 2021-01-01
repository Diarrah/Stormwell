import React, { createContext, useState, useEffect, useRef } from 'react';
import { Navbar, Hero, About, Recipes, Contact, Footer } from './components';
import './App.scss';

export const StormwellContext = createContext();

const App = () => {
    const navbarEl = useRef(),
          heroEl = useRef(),
          aboutEl = useRef(),
          recipeEl = useRef(),
          contactEl = useRef();
    const [viewport, setViewport] = useState(window.innerWidth);

        function useWindowSize() {
            useEffect(() => {
                function updateSize() {
                    setViewport(window.innerWidth);
                }      
                window.addEventListener("resize", updateSize);
                updateSize();
                return () => window.removeEventListener("resize", updateSize);
            }, []);
    
            return viewport;
        }
        
        useWindowSize()

    return (
        <StormwellContext.Provider value={{navbarEl, heroEl, aboutEl, recipeEl, contactEl, viewport}}>
            <div className="App">
                <Navbar />
                <Hero />
                <About />
                <Recipes />
                <Contact />
                <Footer />
            </div>
        </StormwellContext.Provider>
    );
}

export default App;