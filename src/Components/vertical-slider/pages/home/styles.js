import {makeStyles} from '@material-ui/core/styles';

import background from '../../../../assets/images/backgoung-home.jpg';

export default makeStyles((theme)=>({
    mainContainer: {
        width: '100%', 
        height: '100vh',
        backgroundImage: `url('${background}')`,
        backgroundColor: theme.palette.transparentBackground, 
        backgroundBlendMode: 'darken', 
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    container: {
        width: '100%', 
        height: '100%',
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    heading1: {
        display: 'flex',
        justifyContent: 'center',
    },
    heading2 : {
        color: 'transparent ! important',
        background: `-webkit-linear-gradient(-45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.dark} 90%)`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        display: 'flex',
        justifyContent: 'center',
    },
    button: {
        margin: '15px 10px',
        padding: '10px 10px',
        background: theme.palette.primary.dark,
        transition: 'all 0.5s',
        '&:hover':{
            transform: 'scale(1.05)',
            background: `-webkit-linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.dark} 90%)`,
        }
    },
}));