import React from 'react';

import { Home, AboutUs, OurServices, LetsTalk, Footer } from './pages';

import useStyles from './styles.js';

const VerticalSlider = () => {
    const classes = useStyles();
    return (
        <div className={classes.list}>
            <Home />
            <AboutUs />
            <OurServices />
            <LetsTalk />
            <Footer />
        </div>
    )
}

export default VerticalSlider