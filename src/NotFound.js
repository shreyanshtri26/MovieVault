import React from 'react'
import { Link } from 'react-router-dom'
import { TextField, Button } from "@mui/material";

export const NotFound = () => {
  return (
    <div className='notfound'>
        <div className="checkout">  
        <Button variant="contained"><Link to="/portal/home">Go to Home</Link></Button>
      </div> 
    </div>
  )
}
