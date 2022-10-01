import React, {  useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import { Link, useNavigate } from 'react-router-dom';

function Register() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [msg, setMsg] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const registerHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('/api/users/register',{
                firstName, lastName, email, password, passwordConfirm
            });
            localStorage.setItem('userInfo', JSON.stringify(data));
            setMsg(data.message);
            setError('');
            navigate('/')
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
                    <h2 className='mb-4'>Register an Account</h2>
                        <form onSubmit={registerHandler}>
                            {error && <Alert severity="error" className='mb-3'>{error}</Alert>}
                            {msg && <Alert severity="success" className='mb-3'>{msg}</Alert>}
                            <div className='mb-3'>
                                <Box component="form" sx={{ width: 320,maxWidth: '100%' }} autoComplete="off" >
                                    <TextField fullWidth type='text' label="first name" size="small"
                                     value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                                </Box>
                            </div>
                            <div className='mb-3'>
                                <Box component="form" sx={{ width: 320,maxWidth: '100%' }} autoComplete="off" >
                                    <TextField fullWidth type='text' label="last name" size="small"
                                     value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                                </Box>
                            </div>
                            <div className='mb-3'>
                                <Box component="form" sx={{ width: 320,maxWidth: '100%' }} autoComplete="off" >
                                    <TextField fullWidth type='text' label="email" size="small"
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
                                <Box component="form" sx={{ width: 320,maxWidth: '100%' }} autoComplete="off" >
                                    <TextField fullWidth type='password' label="confirm password" size="small"
                                     value={passwordConfirm} onChange={(e)=>setPasswordConfirm(e.target.value)}/>
                                </Box>
                            </div>
                            <div className='mb-3'>
                                <button className='sign-btn px-3 py-1 shadow' type='submit'>Sign up</button>
                            </div>
                            <Link to='/'>
                                <p>Already have an account?Sign In</p>
                            </Link>
                        </form>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Register