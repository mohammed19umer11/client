import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme)=>({
    mainContainer: {
        width: '100%', 
        height: '100vh',
        backgroundBlendMode: 'darken', 
        backgroundRepeat: 'no-repeat', 
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    container: {
        width: '100%', 
        height: '100%',
        display: 'flex', 
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
        },
        [theme.breakpoints.up('lg')]: {
            flexDirection: 'row',
        },
    },
    heading: {
        padding: `calc(${theme.mixins.toolbar}px + 50px) 30px 0px 30px`,
        overflow: 'auto',
        [theme.breakpoints.up('md')]: {
            width: '60%',
        },
        [theme.breakpoints.up('lg')]: {
            width: '60%',
        },

    },
    rectangle: {
        color: 'transparent',
        width: 40,
        marginBottom: 2, 
        height: 8,
        background: `-webkit-linear-gradient(-45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.dark} 90%)`,
    },
    about: {
        marginTop: 8,
    },
    content: {
        margin: `30px 0px`,
        display: 'flex', 
        flexDirection: 'row',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'column',
            height: '60%',
            justifyContent: 'space-evenly',
        },
        [theme.breakpoints.up('lg')]: {
            flexDirection: 'column',
            height: '60%',
            justifyContent: 'space-evenly',
        },
    },
    icon: {
        width: 30,
        objectFit: 'contain',
        marginRight: 10
    },
    text: {
        width: '50%',
        display: 'flex',
        flexDirection: 'row',
        fontSize: 'smaller',
        [theme.breakpoints.up('md')]: {
            fontSize: 'medium',
            width: '100%',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: 'medium',
            width: '100%',
        },
    },
    about_img : {
        padding: `30px 30px 0px 30px`,
        [theme.breakpoints.up('md')]: {
            width: '40%',
            height: '60%',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: `calc(${theme.mixins.toolbar}px + 30px)`,
        },
        [theme.breakpoints.up('lg')]: {
            width: '40%',
            height: '60%',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: `calc(${theme.mixins.toolbar}px + 30px)`,
        },
    }
}));