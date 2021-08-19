import {makeStyles} from '@material-ui/core/styles';


export default makeStyles((theme)=>({
    appBar: {
        position: 'fixed',
        width: '100%',
        left: 0,
        zIndex: 1400,
        background: 'transparent',
        boxShadow: 'none',
        transition: theme.transitions.create(["width"], {
            easing: theme.transitions.easing.sharp,
            duration: 1000
        }),
    },
    appBarDrawerOpen: {
        width: `calc(100% - ${theme.shape.drawerWidth + 30}px)`,
        transition: theme.transitions.create(["width"], {
            easing: theme.transitions.easing.easeOut,
            duration: 950
        }),
    },
    toolBar: {
        padding: '10px 30px',
        background: theme.palette.transparentBackground, 
        display: 'flex', 
        justifyContent: 'space-between', 
    },
    logo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {

    },
    title1: {
        color: theme.palette.common.white,
        background: `-webkit-linear-gradient(-45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.dark} 90%)`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        padding: 0,
        margin: '0px 0px 0px 5px'
    },
    title2: {
        color: theme.palette.common.white,
        padding: 0,
        margin: '0px 0px 0px 7px',
    },
    menu: {
        padding: 0,
        color: theme.palette.common.white,
        transition: 900,
    },
    menuMain: {
        width: theme.shape.drawerWidth,
        padding: '25px 15px',
        height: '100vh',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        backgroundColor: '#302F2F',
    },
    menuMainMobile: {
        position: 'fixed',
        backgroundColor: '#302F2F',
        height: '75%',
        width: '75%',
    },
    menuList: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#302F2F',
    },
    listItem: {
        backgroundColor: '#302F2F',
        padding: 0,
        marginBottom: 20,
        transition: theme.transitions.create(["background"], {
            easing: theme.transitions.easing.easeOut,
            duration: 500
        }),
    },
    listItemButton: {width: '100%', padding: 0, backgroundColor: '#302F2F',},
    // listItemActive: {
    //     background: `linear-gradient(45deg, #e0040b 30%, #dd1e4b 90%)`,
    // },
    listItemText: {
        width: '100%',
        color: theme.palette.common.white, 
        backgroundColor: '#302F2F',
        '&:hover': {
            color: theme.palette.primary.dark,
         },
        transition: theme.transitions.create(["color"], {
            easing: theme.transitions.easing.easeOut,
            duration: 500
        }),
    },
    listItemTextActive: {
        color: theme.palette.primary.dark, 
    },
    socials: {
        width: '70%',
        height: '10%',
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    
}));