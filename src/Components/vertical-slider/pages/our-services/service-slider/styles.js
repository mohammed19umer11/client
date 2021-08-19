import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme)=>({
    slider: {
        width: '95%',
        height: '100%',
    },
    container: {
        display: 'flex',
        padding : 5,
        width: '14.5em!important',
        height: '14.5em !important',        
        justifyContent: 'center',
        alignItems: 'center',
        background: '#302F2F',
        transition: 'all 0.5s',
        [theme.breakpoints.down('sm')]: {
            width: '30em !important',
            height: '30em !important',
        },
        [theme.breakpoints.down('xs')]: {
            width: '9.5em !important',
            height: '12.5em !important',
        },
        '&:hover': {
            background: `-webkit-linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.dark} 90%)`,
            transform: 'scale(1.1)',
            color: `${theme.palette.common.white} ! important`,
        },
    },
    content: {
        height: '85%',
        display: 'flex',
        background: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        transition: 'all 0.5s',
        '&:hover': {
            color: `${theme.palette.common.white} ! important`,
        },
    },
    icon: {
        height: '15%', 
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        height: '15%',
        padding: '5% 0% 0% 0%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    detail: {
        padding: '5% 0%',
        height: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}));