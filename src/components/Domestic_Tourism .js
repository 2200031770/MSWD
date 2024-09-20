import React from 'react'
import { Button, Card } from '@mui/material'
import { useNavigate } from "react-router-dom";
import pic1 from './Images/Charminar.jpg'
import pic2 from './Images/Munnar.jpg'
import pic3 from './Images/Amaravathi.jpg'
import pic4 from './Images/Mysore.jpg'
import pic5 from './Images/Dudhsagar.jpg'
import pic6 from './Images/Gulmarg.jpg'
import pic7 from './Images/Khajuraho.jpg'
import pic8 from './Images/coimbatore.jpg'
import pic9 from './Images/Dibrugraph.jpg'
import pic10 from './Images/Lotus.jpg'



function Domestic_Tourism () {
  const navigate = useNavigate();
  return (
    <div>
      <br></br>
        <div sx={{float:'left'}}>
          <Card sx={{ width: 300 ,height:350,float:'center',backgroundColor: "blue",float:'left' }}>
          <h5>{<img src={pic1} width="200" height="200"/>}<br/>Name of the place : Charminar<br/>Located : Telangana<br/>Available transport facilities:Train,bus<br/></h5>
         
          <Button variant="contained" onClick={() => navigate("/Des")}>Description</Button>
          <Button  variant="contained" onClick={() => navigate("/Payment")}>Book Now</Button>
          
 
          
          
          

       
       
        
          </Card>
        
          </div>


          <div sx={{float:'left'}}>
          <Card sx={{ width: 300 ,height:350,float:'center',backgroundColor: "red",float:'left' }}>
          <h5>{<img src={pic2} width="200" height="200"/>}<br/>Name of the place : Munnar<br/>Located : Kerala<br/>Available transport facilities:Train,bus<br/></h5>
          <Button variant="contained" onClick={() => navigate("/Des1")}>Description</Button>
          <Button variant="contained" onClick={() => navigate("/Payment")}>Book Now</Button>
          </Card>
          
        
          </div>

          <div sx={{float:'left'}}>
          <Card sx={{ width: 300 ,height:350,float:'center',backgroundColor: "blue",float:'left' }}>
          <h5>{<img src={pic3} width="200" height="200"/>}<br/>Name of the place : Amaravathi<br/>Located  : Andhra pradesh <br/>Available transport facilities :Train,bus<br/></h5>
          <Button variant="contained" onClick={() => navigate("/Des2")}>Description</Button>
          
          <Button variant="contained" onClick={() => navigate("/Payment")}>Book Now</Button>
          </Card>
        
          </div>
        
       
        

          <div sx={{float:'left'}}>
          <Card sx={{ width: 300 ,height:350,float:'center',backgroundColor: "red",float:'left' }}>
          <h5>{<img src={pic4} width="200" height="200"/>}<br/>Name of the place : Mysore palace<br/>Located  : Karnataka <br/>Available transport facilities : Train,bus<br/></h5>
          <Button variant="contained" onClick={() => navigate("/Des3")}>Description</Button>
          
          <Button variant="contained" onClick={() => navigate("/Payment")}>Book Now</Button>
          </Card>
        
          </div>



          <div sx={{float:'left'}}>
          <Card sx={{ width: 300 ,height:350,float:'center',backgroundColor: "blue",float:'left' }}>
          <h5>{<img src={pic5} width="200" height="200"/>}<br/>Name of the place : Dudhsagar water falls <br/>Located  : Goa <br/>Available transport facilities : Train,bus <br/></h5>
          <Button variant="contained" onClick={() => navigate("/Des4")}>Description</Button>
          <Button variant="contained" onClick={() => navigate("/Payment")}>Book Now</Button> 
          </Card>
        
          </div>


          <div sx={{float:'left'}}>
          <Card sx={{ width: 300 ,height:350,float:'center',backgroundColor: "red",float:'left' }}>
          <h5>{<img src={pic6} width="200" height="200"/>}<br/>Name of the place :Gulmarg <br/>Located  : Jammu & Kashmir  <br/>Available transport facilities : Train,bus <br/></h5>
          <Button variant="contained" onClick={() => navigate("/Des5")}>Description</Button>
          <Button variant="contained" onClick={() => navigate("/Payment")}>Book Now</Button>
          </Card>
        
          </div>



          <div sx={{float:'left'}}>
          <Card sx={{ width: 300 ,height:350,float:'center',backgroundColor: "blue",float:'left' }}>
          <h5>{<img src={pic7} width="200" height="200"/>}<br/>Name of the place :Khajuraho <br/>Located  : Madhya Pradesh <br/>Available transport facilities : Train,bus <br/></h5>
          <Button variant="contained" onClick={() => navigate("/Des6")}>Description</Button>
          <Button variant="contained" onClick={() => navigate("/Payment")}>Book Now</Button>
          </Card>
        
          </div>


          <div sx={{float:'left'}}>
          <Card sx={{ width: 300 ,height:350,float:'center',backgroundColor: "red",float:'left' }}>
          <h5>{<img src={pic8} width="200" height="200"/>}<br/>Name of the place :coimbatore<br/>Located  :Tamil-Nadu <br/>Available transport facilities : Train,bus <br/></h5>
          <Button variant="contained" onClick={() => navigate("/Des7")}>Description</Button>
          <Button variant="contained" onClick={() => navigate("/Payment")}>Book Now</Button>  
          </Card>
        
          </div>



          <div sx={{float:'left'}}>
          <Card sx={{ width: 300 ,height:350,float:'center',backgroundColor: "blue",float:'left' }}>
          <h5>{<img src={pic9} width="200" height="200"/>}<br/>Name of the place :Dibrugraph<br/>Located  :Assam <br/>Available transport facilities : Train,bus <br/></h5>
          <Button variant="contained" onClick={() => navigate("/Des8")}>Description</Button>
          <Button variant="contained" onClick={() => navigate("/Payment")}>Book Now</Button>
          </Card>
        
          </div>


          <div sx={{float:'left'}}>
          <Card sx={{ width: 300 ,height:350,float:'center',backgroundColor: "red",float:'left' }}>
          <h5>{<img src={pic10} width="200" height="200"/>}<br/>Name of the place :Lotus temple <br/>Located  :Delhi <br/>Available transport facilities : Train,bus <br/></h5>
          <Button variant="contained" onClick={() => navigate("/Des9")}>Description</Button>
          <Button variant="contained" onClick={() => navigate("/Payment")}>Book Now</Button>
          </Card>
        
          </div>










    </div>
  )
}

export default Domestic_Tourism