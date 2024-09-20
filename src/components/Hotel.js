import React from 'react'
function Hotel(){
    return(
        <div>
         <h1> The hotels present near to the Charminar</h1>
         
         
               
        </div>

    )
}

export default Hotel;
// models/Hotel.js

const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  name: String,
  city: String,
  stars: Number,
  // ... other fields
});

module.exports = mongoose.model('Hotel', hotelSchema);
