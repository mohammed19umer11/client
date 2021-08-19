import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme)=>({
    mainContainer: {
        width: '100%', 
        height: '60vh',
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        height: '90%',
        width: '100%',
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
        },
    },
    box: {
        height: '60%',
        padding: '2%',
        width: '90%',
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    heading: {
        height: '20%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
    },
    info: {
        height: '80%',
        width: '100%',
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title1: {
        color: 'white',
        background: `-webkit-linear-gradient(-45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.dark} 90%)`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        padding: 0,
    },
    title2: {
        color: 'white',
        padding: 0,
        margin: '0px 0px 0px 7px',
    },
    socials: {
        width: '70%',
        height: '10%',
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    copyright: {
        color: 'white',
        background: '#302F2F',
        height: '10%',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    }

}));