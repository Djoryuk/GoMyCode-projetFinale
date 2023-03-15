import React,{useState} from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast';
import {Box,
Typography,
useTheme,
useMediaQuery,
TextField,
Button,
Alert,
Collapse} from '@mui/material'
import axios from 'axios'


const Register = () => {
  const theme = useTheme()
  const navigate = useNavigate()
  //MEDIAQUERY 
  const isNotMobile= useMediaQuery ("(min-width:100px)")
  //states 
  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState("")

  //register contorl
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
       await axios.post('/api/v1/auth/register',{username,email,password})
      toast.success('User Register Successfully')
      navigate('/login')

    } catch (err) {
      console.log(error)
      if(err.response.data.error){
        setError(err.response.data.error)
      }else if(err.message){
         setError(err.message)
      }
      setTimeout(() => {
        setError("");
      },5000)
    }
  }
  return (
    <Box width={isNotMobile ? '40%' : '80%'} 
    p={'2rem'} 
    m={'2rem auto'}
    borderRadius={5}
    sx={{boxShadow:5}}
    backgroundColor={theme.palette.background.alt}
    >
      <Collapse in={error}>
      <Alert severity="error" sx={{mb:2}}>{error}</Alert>
      </Collapse>
        <form onSubmit={handleSubmit}>
          <Typography variant='h3'> Sign up</Typography>
          <TextField label="username"
          required
          margin="normal"
            fullWidth
            value={username}
            onChange={(e) =>{setUsername(e.target.value)}}
            />

          <TextField label="email"
          type="email"
          required
          margin="normal"
            fullWidth
            value={email}
            onChange={(e) =>{setEmail(e.target.value)}}
            />

          <TextField label="password"
          required
          type="password"
          margin="normal"
            fullWidth
            value={password}
            onChange={(e) =>{setPassword(e.target.value)}}
            />
            <Button type="submit"
            fullWidth
            variant='contained'
            size="large"
            sx={{color :"white", mt:2}}>SignUp
            </Button>
            <Typography my={2}>Already have an account ?
              <Link to="/login">please login</Link> </Typography>
        </form>
    </Box>
  )
}

export default Register;