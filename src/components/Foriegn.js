import React from 'react'
import { Button, Card } from '@mui/material'
import c1 from './Images/Eiffel.jpg'
import c2 from './Images/Australia.jpg'
import c3 from './Images/Japan.jpg'
import c4 from './Images/America.jpg'
import c5 from './Images/England.jpg'
import c6 from './Images/Africa.jpg'
import c7 from './Images/Newzealand.jpg'
import c8 from './Images/Germany.jpg'
import c9 from './Images/Netherlands.jpg'
import c10 from './Images/Spain.jpg'
 import { useNavigate } from "react-router-dom";
function Foriegn()
{ const navigate = useNavigate();
    return(
        <div>
            
        <div sx={{float:'left'}}>
          <Card sx={{ width: 300 ,height:400,float:'center',backgroundColor: "yellow",float:'left' }}>
          <h5>{<img src={c1} width="250" height="250"/>}<br/>Name of the place : Eiffel Tower <br/>Located : Paris<br/>Available transport facilities:Flight<br/></h5>
          <Button variant="contained" onClick={() => navigate("/Dis1")}>Description</Button>
          <Button variant="contained" onClick={() => navigate("/Payment")}>Book Now</Button>
          </Card>
        
          </div>
          <div sx={{float:'left'}}>
          <Card sx={{ width: 300 ,height:400,float:'center',backgroundColor: "green",float:'left' }}>
          <h5>{<img src={c2} width="250" height="250"/>}<br/>Name of the place : sydney <br/>Located : Australia<br/>Available transport facilities:Flight<br/></h5>
          <Button variant="contained" onClick={() => navigate("/Dis2")}>Description</Button>
          <Button variant="contained" onClick={() => navigate("/Payment")}>Book Now</Button>
          </Card>
        
          </div>

          <div sx={{float:'left'}}>
          <Card sx={{ width: 300 ,height:400,float:'center',backgroundColor: "yellow",float:'left' }}>
          <h5>{<img src={c3} width="250" height="250"/>}<br/>Name of the place : Tokyo <br/>Located : Japan<br/>Available transport facilities:Flight<br/></h5>
          <Button variant="contained" onClick={() => navigate("/Dis3")}>Description</Button>
          <Button variant="contained" onClick={() => navigate("/Payment")}>Book Now</Button>
          </Card>
        
          </div>


          <div sx={{float:'left'}}>
          <Card sx={{ width: 300 ,height:400,float:'center',backgroundColor: "green",float:'left' }}>
          <h5>{<img src={c4} width="250" height="250"/>}<br/>Name of the place : Golden Gate Bridge <br/>Located :America<br/>Available transport facilities:Flight<br/></h5>
          <Button variant="contained" onClick={() => navigate("/Dis4")}>Description</Button>
          <Button variant="contained" onClick={() => navigate("/Payment")}>Book Now</Button>
          </Card>
        
          </div>

          <div sx={{float:'left'}}>
          <Card sx={{ width: 300 ,height:400,float:'center',backgroundColor: "yellow",float:'left' }}>
          <h5>{<img src={c5} width="250" height="250"/>}<br/>Name of the place : Throplilia <br/>Located :England<br/>Available transport facilities:Flight<br/></h5>
          <Button variant="contained" onClick={() => navigate("/Dis5")}>Description</Button>
          <Button variant="contained" onClick={() => navigate("/Payment")}>Book Now</Button>
          </Card>
        
          </div>


          <div sx={{float:'left'}}>
          <Card sx={{ width: 300 ,height:400,float:'center',backgroundColor: "green",float:'left' }}>
          <h5>{<img src={c6} width="250" height="250"/>}<br/>Name of the place :  Alfred Waterfront <br/>Located :Africa<br/>Available transport facilities:Flight<br/></h5>
          <Button variant="contained" onClick={() => navigate("/Dis6")}>Description</Button>
          <Button variant="contained" onClick={() => navigate("/Payment")}>Book Now</Button>
          </Card>
        
          </div>
          


          <div sx={{float:'left'}}>
          <Card sx={{ width: 300 ,height:400,float:'center',backgroundColor: "yellow",float:'left' }}>
          <h5>{<img src={c7} width="250" height="250"/>}<br/>Name of the place :  Auckland <br/>Located : New Zealand<br/>Available transport facilities:Flight<br/></h5>
          <Button variant="contained" onClick={() => navigate("/Dis7")}>Description</Button>
          <Button variant="contained" onClick={() => navigate("/Payment")}>Book Now</Button>
          </Card>
        
          </div>


          <div sx={{float:'left'}}>
          <Card sx={{ width: 300 ,height:400,float:'center',backgroundColor: "green",float:'left' }}>
          <h5>{<img src={c8} width="250" height="250"/>}<br/>Name of the place :  Neuschwanstein Castle <br/>Located : Germany<br/>Available transport facilities:Flight<br/></h5>
          <Button variant="contained" onClick={() => navigate("/Dis8")}>Description</Button>
          <Button variant="contained" onClick={() => navigate("/Payment")}>Book Now</Button>
          </Card>
        
          </div>
          

          <div sx={{float:'left'}}>
          <Card sx={{ width: 300 ,height:400,float:'center',backgroundColor: "yellow",float:'left' }}>
          <h5>{<img src={c9} width="250" height="250"/>}<br/>Name of the place :   Keukenhof <br/>Located :Netherlands<br/>Available transport facilities:Flight<br/></h5>
          <Button variant="contained" onClick={() => navigate("/Dis9")}>Description</Button>
          <Button variant="contained" onClick={() => navigate("/Payment")}>Book Now</Button>
          </Card>
        
          </div>
          


          <div sx={{float:'left'}}>
          <Card sx={{ width: 300 ,height:400,float:'center',backgroundColor: "green",float:'left' }}>
          <h5>{<img src={c10} width="250" height="250"/>}<br/>Name of the place : Alhambra<br/>Located :Spain<br/>Available transport facilities:Flight<br/></h5>
          <Button variant="contained" onClick={() => navigate("/Dis10")}>Description</Button>
          <Button variant="contained" onClick={() => navigate("/Payment")}>Book Now</Button>
          </Card>
        
          </div>
          
          
          
          




        
        </div>
    )
}

export default Foriegn