import React from 'react';

import theme from './theme';
import { ThemeProvider } from '@material-ui/core';

import Navbar from './Components/navbar/Navbar.jsx';
import VerticalSlider from './Components/vertical-slider/vertcalSlider.jsx';

const App = () => {

    return(
        <ThemeProvider theme={ theme }>
            <Navbar />
            <VerticalSlider />
            

        </ThemeProvider>
    )
}

export default App;