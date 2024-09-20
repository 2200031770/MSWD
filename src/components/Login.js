import React,{useState} from 'react'  
import TextField from '@mui/material/TextField'; 
import k1 from './Images/Logo1.jpg'
import { Avatar, Button, Card, Checkbox, Link,FormControlLabel } from '@mui/material'; 
import { useNavigate } from "react-router-dom"; 
 
function Login() { 
  const navigate = useNavigate(); 
  return ( 
    <> 
  <div style={{  backgroundImage: `url(${k1})`,height: "3000px",width :"8000",backgroundRepeat: "no-repeat"}}> 
       <center>
          <div  sx={{fontStyle: "cursive"}}> 
          <h1 style={{ color: "blue" }}>WELCOME TO TRAVEL TOURISM WEBSITE</h1> 
        <h3 style={{ color: "blue" }}>LOG IN</h3></div> 
        <Card sx={{ width: 345 ,height:400,float:'center',backgroundColor: "white"}}>         
        <Avatar></Avatar><br></br> 
        <TextField id="outlined-basic" label="User name" variant="outlined" /><br></br><br></br> 
        <TextField id="outlined-password-input"label="Password"  type="password" autoComplete="current-password" /><br></br><br></br> 
        <FormControlLabel value="female" control={<Checkbox />} label="Remember Me" /><br></br> 
        <Button variant="contained" onClick={() => navigate("/Goto")}>Log In</Button><br></br> 
        <Link><Button  onClick={() => navigate("/Register")}>Create an Account</Button></Link> 
        </Card> 
        </center> 
    </div> 
    </> 
  ) 
} 
 
export default Login