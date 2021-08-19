import { createTheme } from '@material-ui/core/styles';

const theme =  createTheme({
    typography: {
        fontFamily: [
            'Roboto', 'Helvetica', 'Arial', 'sans-serif','Pacifico','Lobster','cursive'
        ].join(','),
        h1: {
            textAlign: 'center',
            fontWeight: 900,
            lineHeight: 1,
        },
        h4:{
            fontWeight: 900,
            fontSize: "2rem",
            lineHeight: 1,
            letterSpacing: "0.00938em",
        },
        h5:{
            fontWeight: 700,
            fontSize: "1.2rem",
            lineHeight: 1,
            letterSpacing: "2.5px",
        },
        h6: {
            textAlign: 'center',
            fontWeight: 500,
            fontSize: "1.1rem",
            lineHeight: 1,
            letterSpacing: "2.5px",
        },
        subtitle1: {
            textAlign: 'center',
            fontWeight: 400,
            fontSize: "1.1rem",
            lineHeight: 1,
        },
        subtitle2: {
            fontWeight: 900,
            fontSize: '1.3rem',
            textAlign: 'center',
            lineHeight: 1,
        },
        body1: {
            textAlign: 'center',
            fontWeight: 400,
            fontSize: "1.05rem",
            lineHeight: 1,
            letterSpacing: 0,
        },
        body2: {
            textAlign: 'center',
            fontWeight: 200,
            fontSize: "0.95rem",
            lineHeight: 1,
            letterSpacing: 0,
        },
        caption: {
            textAlign: 'center',
            fontWeight: 200,
            fontSize: "0.75rem",
            lineHeight: 1,
            letterSpacing: 1,
        },
    },
    palette: {
        primary: {
            light: '#64f5e4',
            main : '#26FFE6',
            dark: '#0075F2',
        },
        secondary: {
            light: '#64f5e4',
            main : '#0075F2',
            dark: '#0075F2',
        },
        // secondary: {
        //     main: ''
        // },
        transparentBackground: 'rgba(0,0,0,0.7)',
        text:{
            primary: 'rgba(255, 255, 255, 0.87)',
            secondary: '#828282',
            disabled: 'rgba(255, 255, 255, 0.5)',
            hint: 'rgba(255, 255, 255, 0.5)',
            icon: 'rgba(255, 255, 255, 0.5)',
        },
    },
    shape: {
        drawerWidth: 240
    },
    mixins: {
        toolbar: 75
    },
});

theme.overrides = {
    MuiTypography: {
      h1: {
        color: theme.palette.text.primary,
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.5rem ! important',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '3rem ! important',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '4rem ! important',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '6rem ! important',
        },
      },
      h4: {
        color: theme.palette.text.primary,
      },
      h5: {
        color: theme.palette.text.primary,
      },
      h6: {
        color: theme.palette.text.primary,
      },
      subtitle1: {
        color: theme.palette.text.primary,
      },
      subtitle2: {
        color: theme.palette.text.primary,
      },
      body1: {
        color: theme.palette.text.secondary,
      },
      body2: {
        color: theme.palette.text.secondary,
      },
      caption: {
        color: theme.palette.text.primary,
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.65rem ! important',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '0.75rem ! important',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '0.8rem ! important',
            lineHeight: 1.2,
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '0.8rem ! important',
            lineHeight: 1.2,
        },
      },
    },
};

export default theme;