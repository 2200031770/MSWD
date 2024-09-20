import React from 'react'
import { Card } from '@mui/material';
import {useState,useEffect} from 'react';
import axios from 'axios';

function Crud() {
  const [studName,setName]=useState("");
  const [studNumber,setNumber]=useState(0);
  const [studList,setStudList]=useState([]);
const [upName,setUpName]=useState("");
  useEffect(()=>{
    axios.get("/display").then((response)=>{
      setStudList(response.data);
    })
   axios.get("/search").then((response)=>{      setStudList(response.data);    })
  },[]);
  const addToList=()=>{
    axios.post("/newstud",{studName:studName, studNumber:studNumber,});
    console.log(studName,studNumber);
  }
  const updateName=(id)=>{
    axios.put("/upstud",{id:id,upName:upName,});
  }
  const deleteStud=(id)=>{
    axios.delete(`/delstud/${id}`);
    
  }
  return (
    <div>
       <h1>Customer Details</h1>
        <label>Customer Name</label><br/>
        <input type="text"
        onChange={(event)=>setName(event.target.value)}/><br/>
        <label>Customer id</label><br/>
        <input type="number"
        onChange={(event)=>setNumber(event.target.value)}/><br/>
        <button onClick={addToList}>New Customer</button>
            
            {studList.map((val,key)=>{
          return <div key={key} class="student">
            <center>
            <Card sx={{ width: 345 ,height:250,float:'center',backgroundColor: "whitesmoke"}}>
            <h1>{val.name}</h1>
            <h1>{val.htno}</h1>
          <input type="text" onChange={(event)=>setUpName(event.target.value)} placeholder='Enter Name to Update'/>&nbsp;
          <button onClick={()=>updateName(val._id)}>Update Name</button><br/>
          <button onClick={()=>deleteStud(val._id)}>Delete</button>
          </Card>
          </center>
          </div>
          })}
    </div>
  )
}

export default Crud;