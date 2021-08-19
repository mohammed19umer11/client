import React, { useState, useEffect } from 'react'

import {
    Container,
} from '@material-ui/core';

import ServiceSlider from './service-slider/ServiceSlider.jsx';

import useStyles from './styles.js';

import { 
    Typography,
} from '@material-ui/core';

const OurServices = () => {
    const classes = useStyles();
    const services = [
        {
            heading: 'Web Development',
            content: 
                `TechVerge Solutions delivers intuitive and fast websites, 
                web portals, 
                and other web solutions that bring about digital transformation and open the potential for such business. 
                We have qualified engineers to work on the following technologies:
                React JS,Node JS,PHP,Wordpress,Python`,
        },
        {
            heading: 'Mobile app Develoopment',
            content: 
                `We provide expert business analysis, design, 
                development, and integration of the product into your infrastructure. 
                Leveraging next-gen technologies, intelligent algorithms, and modern UI. 
                We provide both native Android and iOS mobile apps based on 
                React Native, Python, and Flutter platforms.`,
        },
        {
            heading: 'Graphics Design',
            content: '',
        },
        {
            heading: 'Game Development',
            content: 
                `We offer end-to-end game development services. 
                Our team has experience working on the best games in the industry, 
                including multi-player RPGs, and VR games. 
                Over the past decade, 
                we have developed games for mobile, PC, and web, 
                using cutting-edge development technologies like Unity3D and Unreal.`,
        },
    ];

    return (
        <div className={classes.mainContainer} id='services'>
            <div className={classes.container}>
                <div className={classes.heading}>
                    <div className={classes.rectangle}>
                        rectangle
                    </div>
                    <Typography variant='h5'>
                        Our Services
                    </Typography>
                </div>
                <Container className={classes.sliderConatiner}>
                    
                    <ServiceSlider services={services} />
        
                </Container>
            </div>
        </div>
    )
}

export default OurServices
