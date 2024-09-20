import React from 'react'
import { Button} from '@mui/material'
import p1 from './Images/munnarhotel.jpg'
import p2 from './Images/munnarhotel1.jpg'
import p3 from './Images/munnarhotel2.jpeg'
import p4 from './Images/hydhotel3.jpg'
import p5 from './Images/munnarmap.jpg'
function Des1(){
    return(
        <div>
         <h1> Munnar </h1>
         
         <p1> The region has been inhabited by hunter-gatherer tribals 
            like the Malayarayan and Muthuvan for thousands of years.
            Tradition states that Colonel Arthur Wellesley, later the Duke of Wellington, 
            was the first British person to pass through Munnar during Tippu Sultan's
             campaign in Travancore, but this is unsubstantiated. The first survey of 
             the terrain was undertaken by Benjamin Swayne Ward in 1816–1817, who followed 
             the Periyar into the Western Ghats and established a camp at the confluence of three rivers,
              from which the name of Munnar is derived It was to be nearly 50 years 
              later that Sir Charles Trevelyan, Governor of Madras, instructed Col.
              \ Douglas Hamilton to explore the hill country in the western part of 
              the Madras Presidency, requesting special advice on the feasibility of 
              \establishing sanatoria for the British in the South and of developing
               revenue- earning projects without endangering the environment, as had
                happened in Ceylon where coffee had destroyed not only the rain forest
                 but also paddy cultivation in the north-central rice bowl of ancient Ceylon.
                  Hamilton climbed throughout the Ghats in Munnar region. 15 years later,
                   John Daniel Munro noted that much of Munnar's land was suitable for 
                   coffee plantations. Munro, Henry Turn and his half-brother AW Turner
                    obtained ownership of the Cardamom Hills from the Raja of 
                    Travancore and began clearing forest around Devikulam in 1879. 
                    Soon many other Europeans began establishing tea plantations in 
                    the area throughout the 1880s. Early plantations had few facilities 
                    and were mainly huts of straw. Most labourers on the tea estates
                     were Dalits from present-day Tamil Nadu.</p1>

                     <br>
               </br>
             
             
               <br>
               </br>
               <h1>ROUTE MAP FOR THE HOTELS NEAR TO THE MUNNAR</h1>

               <br>
               </br>
               <center>

            
               <h5>{<img src={p5} width="600" height="400"/>}</h5>
               </center>
         
        
               <br>
               </br>
               <h1> HOTELS PRESENT NEAR TO MUNNAR</h1>
        
               <br></br>
               <h2>
              Top-Rated hotels
              </h2>
               
               <br>
               </br>
               <center>
               <h5>{<img src={p1} width="600" height="400"/>}</h5>
               <h4> 
                Name of the hotel : Hotel-Emmerland
                <br>
                </br>
                cost : 16,000 per day
                <br>
                </br>
                Rating : 5/5
                <br>
                </br>
                Distance :  2.5Km from munnar
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
               <h5>{<img src={p3} width="600" height="400"/>}</h5>
               <h4> 
                Name of the hotel : Munnar Castle
                <br>
                </br>
                cost : 8,000 per day
                <br>
                </br>
                Rating : 4.5/5
                <br>
                </br>
                Distance :  1 Km from munnar
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
               <h5>{<img src={p2} width="600" height="400"/>}</h5>
               <h4> 
                Name of the hotel : Munnar Castle
                <br>
                </br>
                cost : 3,000 per day
                <br>
                </br>
                Rating : 3.5/5
                <br>
                </br>
                Distance :  3.5Km from Munnar
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

export default Des1;