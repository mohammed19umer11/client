import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme)=>({
    list: {
        position: 'absolute', 
        top: 0, 
        left: 0, 
        bottom: 0, 
        right: 0, 
        height: 'fit-content',
        overflow: 'hidden', 
        overflowY: 'auto',
        display: 'flex', 
        justifyContent: 'center',
        flexDirection: 'column',
    },
}));


