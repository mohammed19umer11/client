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
    sliderConatiner: {
        width: '90%',
        height: '60%', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        padding: 30,
        margin: 30,
        backdropFilter: 'blur(15px) saturate(102%)',
        WebkitBackdropFilter: 'blur(15px) saturate(102%)',
        backgroundColor: 'rgba(66, 69, 74, 0.27)',
        borderRadius: 6,
        border: `2px solid ${theme.palette.primary.dark}`,
    },
    container: {
        width: '100%', 
        height: '100%',
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: theme.mixins.toolbar
    },
    heading: {
        padding: `${theme.mixins.toolbar}px 30px 0px 30px`,
        alignSelf: 'flex-start',
    },
    rectangle: {
        color: 'transparent',
        width: 40,
        marginBottom: 2, 
        height: 8,
        background: `-webkit-linear-gradient(-45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.dark} 90%)`,
    },
}));