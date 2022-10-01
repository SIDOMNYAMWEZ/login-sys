import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Store } from '../Store';

function Login() {
    const { dispatch } = useContext(Store);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const [error, setError] = useState('');

    const loginHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('/api/users/login',{email, password});
            dispatch({type: 'USER_SIGNIN', payload: data});
            localStorage.setItem('userInfo', JSON.stringify(data));
            setMsg(data.message);
            setError('');
            navigate('/content');
        } catch (error) {
            if (error.response && error.response.status >= 400
                && error.response.status <= 500) {
                    setError(error.response.data.message);
                    setMsg('');
                }
        }
    }
  return (
    <div className='mt-5'>
        <table className='mx-auto'>
            <tbody>
                <tr>
                    <td>
                    <h2 className='mb-4'>Login to Your Account</h2>
                        <form onSubmit={loginHandler}>
                            {error && <Alert severity="error" className='mb-3'>{error}</Alert>}
                            {msg && <Alert severity="success" className='mb-3'>{msg}</Alert>}
                            <div className='mb-3'>
                                <Box component="form" sx={{ width: 320,maxWidth: '100%' }} autoComplete="off" >
                                    <TextField fullWidth type='email' label="email" size="small"
                                     value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                </Box>
                            </div>
                            <div className='mb-3'>
                                <Box component="form" sx={{ width: 320,maxWidth: '100%' }} autoComplete="off" >
                                    <TextField fullWidth type='password' label="password" size="small"
                                      value={password} onChange={(e)=>setPassword(e.target.value)}/>
                                </Box>
                            </div>
                            <div className='mb-3'>
                                <button className='sign-btn px-3 py-1 shadow' type='submit'>Sign in</button>
                            </div>
                            <Link to='signup'>
                                <p>I dont have an account?Sign Up</p>
                            </Link>
                            
                        </form>
                    </td>
                </tr>
            </tbody>
        </table>

        <h4 className='my-5 text-center'>Please login to read A Love Story by Edward Monkton</h4>
    </div>
  )
}

export default Login