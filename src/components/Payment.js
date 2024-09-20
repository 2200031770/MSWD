
import React,{useState} from 'react'  
import TextField from '@mui/material/TextField'; 
import k1 from './Images/Payment1.jpg'
import { Avatar, Button, Card, Checkbox, Link,FormControlLabel } from '@mui/material'; 
import { useNavigate } from "react-router-dom"; 
 
function Payment() { 
  const navigate = useNavigate(); 
  return ( 
    <> 
  <div style={{  backgroundImage: `url(${k1})`,height: "3000px",width :"8000",backgroundRepeat: "no-repeat"}}> 
       <center>
          <div  sx={{fontStyle: "cursive"}}> 
          <h1 style={{ color: "blue" }}>Payment page</h1> 
        <h3 style={{ color: "blue" }}>Payment</h3></div> 
        <Card sx={{ width: 500 ,height:500,float:'center',backgroundColor: "whitesmoke"}}>         
        <Avatar></Avatar><br></br> 
        
        <TextField id="outlined-basic" label="Customer name" variant="outlined" /><br></br><br></br> 
        <TextField id="outlined-password-input"label="Password"  type="password" autoComplete="current-password" /><br></br>
        <TextField id="outlined-password-input"label="Enter Amount"  variant="outlined" /><br></br><br></br> 
        <Button variant="contained" onClick={() => navigate("/Goto")}>Generate OTP</Button><br></br> 
        <TextField id="outlined-password-input"label="Enter OTP"  variant="outlined" /><br></br><br></br> 
        <Button variant="contained" onClick={() => navigate("/Pay")}>Pay</Button>
        <br></br><br></br>
        <Button variant="contained" onClick={() => navigate("/Goto")}>Cancel</Button><br></br> 
   
        </Card> 
        </center> 
    </div> 
    </> 
  ) 
} 
 
export default Payment