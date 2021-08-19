import React, { useState } from 'react';

import clsx from 'clsx';

import useStyles from './styles.js';

import { 
    AppBar, 
    Drawer, 
    Typography, 
    Toolbar, 
    IconButton, 
    List, 
    ListItem, 
    Box, 
    Button,
    Link, 
} from '@material-ui/core';

import { MenuRounded, Close, Search } from '@material-ui/icons';

import fb from '../../assets/images/facebook.svg';
import linkedin from '../../assets/images/linkedin.svg';
import insta from '../../assets/images/instagram-filled.svg';
import twitter from '../../assets/images/twitter.svg';

import { motion, AnimatePresence } from 'framer-motion';

import useWindowDimensions from '../../customHooks/useWindowDimensions.js';

import techVergeLogo from '../../assets/images/techverge - logo.svg';

import { Link as RouterLink } from 'react-scroll';

const NavBar = () => {
    const classes = useStyles();
    const [drawer, setDrawer] = useState(false);
    const [selectedIndex, setselectedIndex] = useState(0);
    const drawerTransition = 1000;
    const { width } = useWindowDimensions();
    const menuItems = [
        {name: 'home', link: 'home'},{name: 'about', link: 'about-us'},{name: 'services', link: 'services'},{name: `let's talk`, link: 'contact'}]
    

    const toggleDrawer = () => {
        setDrawer(!drawer);
    }
    const selectTab = (index) => (event) =>   {
        setselectedIndex(index);
        toggleDrawer();
        console.log(selectedIndex)
    }

    const drawerContent = () => (
        <motion.div className={clsx(classes.menuMain, {[classes.menuMainMobile]: width <= 1024})}
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:0.2}}
            // onKeyDown={toggleDrawer}
            >
            <List className={classes.menuList}>
                {menuItems.map((item,index) => (
                <RouterLink to={item.link} smooth={true} duration='1000'>
                    <ListItem key={item.name} className={clsx(classes.listItem, {
                    [classes.listItemActive]: index === selectedIndex,
                    })}>
                        <Button className={classes.listItemButton} onClick={selectTab(index)}> 
                            <Typography 
                            align='left'
                            className={clsx(classes.listItemText, {
                            [classes.listItemTextActive]: index === selectedIndex,
                            })}>
                                <Box 
                                fontWeight= '600' m={1}
                                fontSize= {15}>
                                {item.name}
                                </Box>
                            </Typography>
                        </Button> 
                    </ListItem>
                </RouterLink>
                ))}
            </List>
            <div style={{display: 'flex',flexDirection:'column', justifyContent: 'space-between', height: '25%' ,padding: '10px 0px'}}>
                <div style={{postion: 'relative', bottom: 0, marginBottom : 25}}>
                    <form role='search' style={{display: 'flex', flexDirection: 'row'}}>
                        <input placeholder='search..' type='text' style={{width: '100%', height: 40, border: '0px ', borderRadius: 5, background: '#e0e5e9',}} />
                        <span style={{position:'absolute', right:15, height: 40, display:'flex', alignItems: 'center'}}>
                            <Search/>
                        </span>
                        <input type='submit' style={{position:'absolute', right:15, height: 40, opacity:0}}/>
                    </form>
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
        </motion.div>
      );

    return(
        <AppBar position='sticky' color='transparent' className={clsx(classes.appBar, {
            [classes.appBarDrawerOpen]: drawer === true && width > 1024,
            })}>
            <Toolbar className={classes.toolBar}> 
                <motion.div className={classes.logo}>
                    <img src={techVergeLogo} /> 
                    <div className={classes.text}>
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
                </motion.div>
                <AnimatePresence>
                    <motion.div
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        exit={{opacity:0}}>
                            <IconButton  className={classes.menu} edge='start' aria-label='menu' onClick={toggleDrawer}>
                                {drawer ? <Close/> : <MenuRounded/>}
                            </IconButton> 
                    </motion.div>
                </AnimatePresence>
            </Toolbar>
            {width > 1024 ? <Drawer
                anchor='right'
                open={drawer} 
                onClose={toggleDrawer}
                transitionDuration={{enter: drawerTransition, exit:drawerTransition}}
                >
                    {drawerContent()}
            </Drawer> : 
            drawer && 
            <div style={{postion: 'fixed', display: 'flex', justifyContent: 'center'}}>
                {drawerContent()}
            </div>
            }
        </AppBar>
        
    )
};


export default NavBar;
