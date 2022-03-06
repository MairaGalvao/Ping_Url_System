import React, { useState, useEffect } from 'react';
import "./App.css";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import AppDummy from './AppDummy'

function App() {
  const [userUrl, setUserUrl] = useState('')
  const [pingData, setPingData]  = useState()
  const [urlData, setUrlData]  = useState([])
  const [packetCount, setPacketCount]  = useState(1)
  

function triggerPing() {
  
  fetch("/api", {
    method: "POST",
    headers: {
      'Content-type' : "aplication/json",
      'url' : userUrl,
      'packets': packetCount

            },
    // body: JSON.stringify({url: url }) 
})
 .then((res) => res.json(console.log(res, ' i am the res')))
 .then((data) => {
  setPingData(data.pingData)
  setUrlData(data.urlData)

  })

  
}





  return <> 
 
   <Box class="pingMain">    <h1>Ping form</h1>
    

     Host: <input  onChange={event => setUserUrl(event.target.value)}></input>
  
  <Box style={{display:'flex'}}>    <h2 class="loader">  Count:  {packetCount}</h2> </Box>

    <Slider   max={20} value={packetCount} onChange={(event, newValue) => {setPacketCount(newValue)}} aria-label="Disabled slider" style={{width:'50%', margin:'10px'}}/>


    
      <Button  variant="outlined" onClick={triggerPing}>Run</Button>
    <h2>
    Ouput:
    </h2>
  




   


 <textarea  cols="50"
                rows="20" value={JSON.stringify(pingData, null, 2) }></textarea>


    </Box>
  <AppDummy urlData={urlData}/>
  
  </>
  
}

export default App;



