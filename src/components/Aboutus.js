import React from 'react'
import c1 from './Images/Logos.jpg'
function Aboutus() {
  return (
    <div style={styles.app}>
        <h1>ABOUT US</h1>
        <center>
        
          <h5>{<img src={c1} width="800" height="400"/>}</h5>
         
         
          </center>
   <p>Travel, Tourism & Hospitality Systems (TTH) deals with booking, confirmation and user details. This website contains all the details of tour and different places like hotels, rooms, tourist places etc.. present in the surrounding areas. This system plants a sense of cultural exchange between foreigners and citizens. </p>
<p>Hospitality is a sector which is recognized for a wider service industry. The course in hospitality and tourism equips you with the management, marketing and operational skills within the travel or hospitality arenas.</p>
<p>The websites for the booking of tourist places are not satisfying hospitality system. There is no website which is connected with the hotel booking for the tourist places. That websites do not offer for the ordering of food. These are the some of the problem statements. To overcome these problems, solutions are:</p>
<center>
<li>To create a website that should satisfying hospitality system.</li>
<li>It should work effectively so that users can use it easily.</li>
<li>Provide a clear information about the tourist places.</li>
<li>Include extra features like booking of hotels which are near to their destination place.</li>
</center>
</div>

  )
}

export default Aboutus
const styles = {
  app: {
    padding: 50,
  }}