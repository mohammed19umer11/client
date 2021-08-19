import React from 'react'

import useStyles from './styles.js';

import {
    Typography,
} from '@material-ui/core';

import Slider from 'react-slick';

import icon from '../../../../../assets/images/about-expericen.svg';

import useWindowDimensions from '../../../../../customHooks/useWindowDimensions.js';

import service1 from '../../../../../assets/images/service1.svg';
import service2 from '../../../../../assets/images/service2.svg';
import service3 from '../../../../../assets/images/service3.svg';
import service4 from '../../../../../assets/images/service4.svg';

const ServiceSlider = ({services}) => {
    const classes = useStyles();

    const { width } = useWindowDimensions();

    const settings = {
        dots: true,
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: width < 960 ? 1 : 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: 0,
        draggable: true,
    };

    return (
        <Slider {...settings} className={classes.slider}>
                {
                    services.map((service, index) => (
                        <div className={classes.container} key={index}>
                            <div className={classes.icon}>
                                <img src={service1}></img>
                            </div>
                            <div className={classes.content}>
                                <Typography className={classes.title} variant='h6'>
                                        {service.heading}
                                </Typography>
                                <Typography className={classes.detail} variant='caption'>
                                        {service.content}
                                </Typography>
                            </div>
                        </div>
                    ))
                }
        </Slider>
    )

};

export default ServiceSlider


