import React from 'react'

import useStyles from './styles.js';

import { 
    Typography,
    Box,
    Link
} from '@material-ui/core';

import fb from '../../../../assets/images/facebook.svg';
import linkedin from '../../../../assets/images/linkedin.svg';
import insta from '../../../../assets/images/instagram-filled.svg';
import twitter from '../../../../assets/images/twitter.svg';
import phone from '../../../../assets/images/phone.svg';
import mail from '../../../../assets/images/mail.svg';
import location from '../../../../assets/images/location.svg';

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.mainContainer}> 
            <div className={classes.container}>
                <div className={classes.content}>
                     <div className={classes.box}>
                        <div >
                            <Typography className={classes.title1}>
                                <Box
                                fontFamily='sans-serif'
                                fontWeight= {700}
                                textAlign='center'
                                fontSize= {25}
                                lineHeight={1}
                                >
                                    TechVerge
                                </Box>
                            </Typography>
                            <Typography className={classes.title2}>
                                <Box
                                fontSize='small'
                                fontFamily='sans-serif'
                                textAlign='center'
                                letterSpacing={7}
                                fontWeight={400}
                                >
                                    Solutions
                                </Box>
                            </Typography>
                        </div>
                        <div className={classes.info}>
                            <Typography variant='body2' align='left'>
                                Lorem ipsum dolor sit amet, 
                                consetetur sadipscing elitr, 
                                sed diam nonumy eirmod tempor invidunt ut labore et dolore.
                            </Typography>
                        </div>
                        <div className={classes.socials}>
                            <Link href="http://www.google.com" target="_blank" >
                                <img src={insta} />
                            </Link>
                            <Link href="http://www.google.com" target="_blank">
                                <img src={fb} />
                            </Link>
                            <Link href="http://www.google.com" target="_blank">
                                <img src={linkedin} />
                            </Link>
                            <Link href="http://www.google.com" target="_blank">
                                <img src={twitter} />
                            </Link>
                        </div>
                    </div>
                    <div className={classes.box}>
                        <div className={classes.heading}>
                            <Typography variant='subtitle2'>
                                Get in touch
                            </Typography>
                        </div>
                        <div className={classes.info} style={{flexDirection: 'column',alignItems: 'flex-start'}}>
                            <div>
                                <img src={phone} />
                            </div>
                            <div>
                                <img src={mail} />
                            </div>
                            <div>
                                <img src={location} />
                            </div>
                        </div>
                    </div>
                </div>
               <div className={classes.copyright}>
                   Copyright
               </div>
            </div>
        </div>
    )
};

export default Footer;
