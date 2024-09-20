import React from 'react'
import { Button, Card } from '@mui/material'
import p1 from './Images/parishotel.jpg'
import p2 from './Images/parishotel2.jpg'
import p3 from './Images/parishotel3.jpg'
import p4 from './Images/parishotel4.jpg'
import p5 from './Images/parismap.jpg'
function Dis1(){
    return(
        <div>
         <h1>Effel Tower</h1>
         
         <p>
         The Eiffel Tower was built by Alexandre Gustave Eiffel for the 100th anniversary of the French Revolution. Even though Gustave Eiffel is credited for the Eiffel Tower it was actually two lesser known people who came up with the original drawing of it. These people were Maurice Koechlin and Emile Nouguier. These two men were the chief engineers of Eiffel’s engineering firm. The main architect was Stephen Sauvestre.

Koechlin, Nouguier, Sauvestre, and Eiffel submitted the plans to compete for the spot on the champ de mars plot of land, to serve as the expositions entrance. It would also determine the 1889 world's fair centerpiece in Paris. There were 107 bids submitted to construct the Eiffel Tower. Fifty people worked on the design, and more than 100 built the parts. One hundred and thirty two workers assembled the parts on site.

The first digging for the foundations began on January 28, 1887 and all construction was concluded on March 31, 1889. When the tower was built, it was only meant to be kept for 20 years. People did not like the Eiffel Tower and wanted it taken down because they thought is was an ugly structure polluting the scenery of the Paris sky. After the 20 years, the tower became the property of Paris again.

By this time, the city had learned that the tower could be used to help with communications. There was also a metrology lab that had been installed for studies on everything from gravity to electricity. The military used the tower as a wireless telegraph transmitter for communication during battle. The tower was used in the capture of the spy "Mata Hari" during World War I after a message was intercepted. Today, it is used to send radio and television signals to the capital city of Paris and beyond. After people learned about the many benefits the tower provided, no one wanted it to be taken apart.

The Eiffel Tower joined the green energy movement by building two wind turbines on the second level. These wind turbines produce 10,000 kilowatts per hour (13,000 horsepower per hour) of electricity.
         </p>
         <br>
               </br>
               <br>
               </br>
        
               <br>
               </br>
               <h3>ROUTE MAP FOR THE HOTELS NEAR TO THE EFFEL TOWER</h3>

               <br>
               </br>
               <center>

            
               <h5>{<img src={p5} width="800" height="400"/>}</h5>
               </center>
         
        
               <br>
               </br>

               <h1> HOTELS PRESENT NEAR TO EFFEL TOWER</h1>
        
               <br></br>
               <h2>
              Top-Rated hotels
              </h2>
               
               <br>
               </br>
               <center>
               <h5>{<img src={p1} width="600" height="400"/>}</h5>
               <h4> 
                Name of the hotel : EVERYDAY PARIS
                <br>
                </br>
                cost : 1000 Euros per day
                <br>
                </br>
                Rating : 5/5
                <br>
                </br>
                Distance :  1.5Km from Effiel tower
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
                Name of the hotel : Hotel Eve
                <br>
                </br>
                cost : 900 Euros per day
                <br>
                </br>
                Rating : 4.5/5
                <br>
                </br>
                Distance :  1 Km from Effiel tower
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
               <h5>{<img src={p3} width="800" height="400"/>}</h5>
               <h4> 
                Name of the hotel : Holidaylnn
                <br>
                </br>
                cost : 9000 Euros per day
                <br>
                </br>
                Rating : 4.5/5
                <br>
                </br>
                Distance :  3.5Km from Effiel tower
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
               <h5>{<img src={p4} width="800" height="400"/>}</h5>
               <h4> 
                Name of the hotel : Bequite Hotel
                <br>
                </br>
                cost : 12000  Euros per day
                <br>
                </br>
                Rating : 5/5
                <br>
                </br>
                Distance :  2.5Km from Effiel tower
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

export default Dis1;