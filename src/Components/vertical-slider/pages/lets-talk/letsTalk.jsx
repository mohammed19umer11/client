import React, { useState } from 'react'

import useStyles from './styles.js';

// import nodemailer from 'nodemailer';

import { 
    Typography,
    TextField,
    Button
} from '@material-ui/core';

import image from '../../../../assets/images/background.jpg';

const LetsTalk = () => {
    const [data, setData] = useState({
        name:'',
        email:'',
        message:'',
    });
    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        setData({
            name:'',
            email:'',
            message:'',
        });
    };

    return (
        <div className={classes.mainContainer} id='contact'>
            <div className={classes.container}>
                <div className={classes.content}>
                    <div className={classes.rectangle}>
                        rectangle
                    </div>
                    <Typography variant='h5'>
                        Let's Talk
                    </Typography>
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <TextField
                            className={classes.text}
                            color='secondary'
                            name='name'
                            variant='outlined'
                            label='Name'
                            placeholder='Name*'
                            fullWidth
                            value={data.name}
                            onChange={(e)=>setData({...data,name:e.target.value})}
                        />
                        <TextField 
                            className={classes.text}
                            color='secondary'
                            name='email'
                            variant='outlined'
                            label='Email'
                            placeholder='Email*'
                            fullWidth
                            value={data.email}
                            onChange={(e)=>setData({...data,email:e.target.value})}
                        />
                        <TextField 
                            className={classes.text}
                            color='secondary'
                            minRows={6}
                            name='message'
                            variant='outlined'
                            label='Message'
                            placeholder='Message*'
                            fullWidth
                            multiline
                            value={data.message}
                            onChange={(e)=>setData({...data,message:e.target.value})}
                        />
                        <Button className={classes.buttonSubmit} varinat='contained' size='small' type='submit'>
                            Submit
                        </Button>
                    </form>
                </div>
                <div className={classes.letstalk_img}>
                    <img src={image}/> 
                </div>
            </div>
        </div>
    )
};

export default LetsTalk;

// const sendEmail = async (data) => {
//     var transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//           user: '',
//           pass: ''
//         },
//         tls: {
//             rejectUnauthorized: false
//         }
//     });
                
//     await transporter.sendMail({
//         from: '',
//         to: data.email,
//         subject: '',
//         text: `${data.message}` 
//     }, (error) => {
//         if (error) return error
        
//     });
// }
