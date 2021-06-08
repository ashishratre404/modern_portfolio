import React from 'react';
import './App.css';

import Profile from './components/Profile';
import About from './components/About';
import Education from './components/Education';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App =() =>{
    return(
        <>
            <Profile />
            <About />
            <Education />
            <Work />
            <Contact />
            <Footer />
        </>
    )
}

export default App;