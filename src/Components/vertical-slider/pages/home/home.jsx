import React from 'react'

import useStyles from './styles.js';

import {
    Typography,
    Box,
    Button
} from '@material-ui/core';

import { Link as RouterLink } from 'react-scroll';

import logo from '../../../../assets/images/Icon ionic-ios-color-filter.svg'

const Home = () => {
    const classes = useStyles();

    return (
        <div className={classes.mainContainer} id='home'>
            <div className={classes.container}>
                <div className={classes.logo}>
                    <img src={logo}/>
                </div>
                <div>
                    <Typography variant='h1'>
                        <Box className={classes.heading1}>
                            DESIGN for your
                        </Box>
                    </Typography>
                    <Typography variant='h1'>
                        <Box className={classes.heading2}>
                            satisfaction
                        </Box>
                    </Typography>
                </div>
                <RouterLink to='services' smooth={true} duration={1000}>
                    <Button className={classes.button} varinat='contained' size='large'>
                        EXPLORE
                    </Button>
                </RouterLink>
            </div>
        </div>
    )
};

export default Home;
