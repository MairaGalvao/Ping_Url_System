import Box from '@mui/material/Box';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import { commandOptions } from 'redis';



export default function AppDummy({urlData}){ 
    console.log(urlData)
    return (<> 

    <Box style={{display: 'flex',
    position: 'relative',     alignItems: 'flex-end', paddingRight: '100px'}}>
<Box >
 {urlData.map((elem) => (   // {url: "some url", count: 5}
    <li key={elem.url} > <span > {elem.count} - {elem.url}</span>
    </li>
))}

</Box>

</Box>



   
          </>)

}