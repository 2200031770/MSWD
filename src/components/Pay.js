import React from 'react'  
import {  Card } from '@mui/material'; 
import p1 from './Images/Payment2.jpg'

function Pay() {

    return (
      <div>
        <br></br>
        
     <center>
        <h1> PAYMENT SUCCESSFUL</h1>
            <Card sx={{ width: 400,height:350,float:'center',backgroundColor: "whitesmoke",float:'center' }}>
            <h5>{<img src={p1} width="400" height="400"/>}<br/></h5>
           
            
           
            </Card>

            </center>
            
            </div>

           
  ) 
} 
 
export default Pay