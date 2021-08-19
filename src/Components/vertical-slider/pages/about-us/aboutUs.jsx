import React from 'react'

import useStyles from './styles.js';

import { 
    Typography,
} from '@material-ui/core';

import image from '../../../../assets/images/background.jpg';
import quality from '../../../../assets/images/about-quality.svg';
import experience from '../../../../assets/images/about-expericen.svg';

const AboutUs = () => {
    const classes = useStyles();

    return (
        <div className={classes.mainContainer} id='about-us'>
            <div className={classes.container}>
                <div className={classes.heading}>
                    <div className={classes.rectangle}>
                        rectangle
                    </div>
                    <Typography variant='h5'>
                        About Us
                    </Typography>
                    <Typography className={classes.about} variant='body1' align='left'>
                        Founded in 2020, the team of TechVerge Solutions has a passion for Internet marketing and a keen understanding of how to turn websites into profit centers. 
                        Whatever we do and whomever we help, 
                        we always follow the same guiding principle: driving traffic, 
                        increasing conversion rate,
                        and making sure that our customers get the most out of their online business. 
                    </Typography>
                    <Typography className={classes.about} variant='body1' align='left'>
                        If you require responsive (Web, Mobile App, Game) services at their best then you are at the right place. 
                        The first and foremost important thing for us is to keep our customers satisfied. 
                        We do not consider the project complete unless our customer is completely pleased. 
                        We are a result-driven agency that serves all genres right from corporate, 
                        travels to business, real estate. 
                    </Typography>
                    <Typography className={classes.about} variant='body1' align='left'>
                        We are proud of the stellar reputation we have acquired nationwide for establishing real results that minimize operational costs and maximize online ROI. 
                        As we move forward we’ll continue to drive innovation in all aspects of online marketing.
                    </Typography>
                    {/* <div className={classes.content}>
                        <div className={classes.text}>
                            <img className={classes.icon} src={quality}/>
                            <div>
                                <div>
                                    Quality
                                </div>
                                <div>
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                                    sed diam voluptua.
                                </div>
                            </div>
                        </div>
                        <div className={classes.text}>
                            <img className={classes.icon} src={experience}/>
                            <div>
                                <div >
                                    Experience
                                </div>
                                <div>
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                                    sed diam voluptua.
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className={classes.about_img}>
                    <img src={image} />
                </div>
            </div>

        </div>
    )
};

export default AboutUs;
