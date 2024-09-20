import React from 'react'
import { Button, Card } from '@mui/material'
import p1 from './Images/hydhotel.jpeg'
import p2 from './Images/hydhotel1.jpg'
import p3 from './Images/hydhotel2.jpg'
import p4 from './Images/hydhotel3.jpg'
import p5 from './Images/hydmap.jpg'

function Des(){
    
    return(
        <div>
         <h1> Charminar</h1>
         
         <p> Charminar is one of the oldest monuments in India, and it is situated in Hyderabad,
             Telangana. Charminar was built in 1591 and is a global symbol of Hyderabad.
              This monument is the official emblem of Telangana. Charminar is derived from Urdu, 
              meaning ‘Four Pillars. Now, let us understand some exciting facts about Charminar by reading BYJU’S
               short essay on Charminar. The Charminar monument is 160 feet high. It stands near 
               the banks of the Musi River and is closely situated to Laad Bazaar and Mecca Masjid. 
               Quli Qutub Shahi prayed for the end of the plaque, and he vowed to build a mosque 
               if it were to be eradicated; Charminar was built to commemorate the eradication of the plaque.</p>
               <br>
               </br>
               <br>
               </br>
               <h1> HOTELS PRESENT NEAR TO CHARMINAR</h1>
        
               <br>
               </br>
               <h3>ROUTE MAP FOR THE HOTELS NEAR TO THE CHARMINAR</h3>

               <br>
               </br>
               <center>

            
               <h5>{<img src={p5} width="800" height="400"/>}</h5>
               </center>
         
        
               <br>
               </br>
               <br></br>
               <h2>
              Top-Rated hotels
              </h2>
               
               <br>
               </br>
               <center>
               <h5>{<img src={p1} width="800" height="400"/>}</h5>
               <h4> 
                Name of the hotel : Royalton
                <br>
                </br>
                cost : 10,000 per day
                <br>
                </br>
                Rating : 5/5
                <br>
                </br>
                Distance :  1.5Km from charminar
                <br>
                </br>
                <br>
                </br>
                <Button variant="contained" > BOOK HOTEL</Button>
               </h4>
               </center>
               <br>
               </br>
               <br>
               </br>
               <center>
               <h5>{<img src={p2} width="800" height="400"/>}</h5>
               <h4> 
                Name of the hotel : Hotel sadvika
                <br>
                </br>
                cost : 9,000 per day
                <br>
                </br>
                Rating : 4.5/5
                <br>
                </br>
                Distance :  1 Km from charminar
                <br>
                </br>
                <br>
                </br>
                <Button variant="contained" > BOOK HOTEL</Button>
               </h4>

               </center>
               <br>
               </br>
             <br>
             </br>    
             <br>
             </br>
             <center>    
             <h1>
             Medium -Rated hotels
              </h1>    
              </center> 
              <br>
               </br>
               <center>
               <h5>{<img src={p3} width="500" height="400"/>}</h5>
               <h4> 
                Name of the hotel : Hotel Haridwar
                <br>
                </br>
                cost : 3,000 per day
                <br>
                </br>
                Rating : 3.5/5
                <br>
                </br>
                Distance :  3.5Km from charminar
                <br>
                </br>
                <br>
                </br>
                <Button variant="contained" > BOOK HOTEL</Button>
               </h4>
               </center> 

               <br>
               </br>
               <center>
               <h5>{<img src={p4} width="500" height="400"/>}</h5>
               <h4> 
                Name of the hotel :Hotel-Nested
                <br>
                </br>
                cost : 3,000 per day
                <br>
                </br>
                Rating : 3/5
                <br>
                </br>
                Distance :  2.5Km from charminar
                <br>
                </br>
                <br>
                </br>
                <Button variant="contained" > BOOK HOTEL</Button>
               </h4>
               </center> 
               
        </div>

    )
}

export default Des;