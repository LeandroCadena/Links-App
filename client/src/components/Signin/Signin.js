import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import '@fontsource/roboto';
import './Signin.scss';
import PageIcon from '../../images/Link-icon.png'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_HOST } from '../../utils/constants';
import { toast } from 'react-toastify';

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(25),
        height: theme.spacing(25),
    },
    container: {
        background: 'linear-gradient(45deg, #037DFF 30%, #03FFD1 90%)',
        height: '100vh',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center'
    },
    box: {
        background: 'white',
        borderRadius: '0.8em',
        padding: '1em',
        fontFamily: "Roboto",
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
    },
    title: {
        textShadow: '3px 3px 4px black, 0 0 2px black, 0 0 2px black',
        color: 'white',
        fontSize: 'xx-large',
        borderBottom: '3px solid gray',
        paddingBottom: '5px',
        width: '20ch'
    },
    input: {
        '& > *': {
            margin: theme.spacing(1),
            width: '40ch',
            display: 'flex',
        },
    },
    button: {
        width: '40ch',
        marginTop: '2em'
    },
}));

export default function Signin() {
    const classes = useStyles();
    const history = useHistory();
    const [data, setData] = useState(
        {
            email: null,
            password: null
        }
    )

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async () => {
        const loadingToast = toast.loading('Please wait...')
        try {
            const res = await axios.post(`${API_HOST}/auth/signin`, data);
            window.localStorage.setItem(
                "loggedUser",
                JSON.stringify(res.data)
            );
            history.push("/home");
            toast.update(loadingToast, { render: `Welcome`, type: toast.TYPE.SUCCESS, isLoading: false, autoClose: 5000 });
        } catch (err) {
            console.log(err);
            toast.update(loadingToast, { render: `Wrong email or password`, type: toast.TYPE.ERROR, isLoading: false, autoClose: 5000 });
        }
    }

    return (
        <Container className={classes.container} maxWidth="m">
            <Box className={classes.box}>
                <Avatar alt="Remy Sharp" src={PageIcon} className={classes.large} />
                <h2 className={classes.title}>Links App</h2>
                <form className={classes.input} noValidate autoComplete="off">
                    <TextField id="standard-basic" color="secondary" label="Email" value={data.email} name='email' onChange={handleChange} />
                    <TextField id="standard-basic" color="secondary" label="Password" value={data.password} name='password' onChange={handleChange} />
                </form>
                <Button className={classes.button} variant="contained" color="secondary" onClick={() => handleSubmit()}>
                    LOGIN
                </Button>
                <h4>Don't have an account?
                    <Link to='/signup' className='link'>Create</Link>
                </h4>
            </Box>
        </Container>
    )
}
