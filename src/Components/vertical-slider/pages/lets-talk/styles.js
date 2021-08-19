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
    content: {
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
    form: {
        paddingTop: 30,
        display: 'flex',
        height: '80%',
        alignContent: 'flex-start',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },
    text: {
        margin: '10px 0px',
    },
    buttonSubmit: {
        padding: 5,
        background: theme.palette.primary.dark,
        transition: 'all 0.5s',
        '&:hover':{
            transform: 'scale(1.05)',
            background: `-webkit-linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.dark} 90%)`,
        }
    },  
    letstalk_img : {
        padding: `30px 30px 0px 30px`,
        [theme.breakpoints.up('md')]: {
            width: '80%',
            height: '60%',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: `calc(${theme.mixins.toolbar}px + 30px)`,
        },
        [theme.breakpoints.up('lg')]: {
            width: '80%',
            height: '60%',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: `calc(${theme.mixins.toolbar}px + 30px)`,
        },
    }
}));