import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Home = () => {
  return (
    <>
    <div className='p-44 pt-5'>
        <h2 className='text-4xl'>Loan Calculator Dashboard </h2>
        <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Loan Amount"
          defaultValue="100000"
        />
        <TextField
          required
          id="outlined-required"
          label="Interest Rate (%)"
          defaultValue="100000"
        />
        <TextField
          required
          id="outlined-required"
          label="Term (Years)"
          defaultValue="100000"
        />
      </div>
      <Button variant="contained" sx={{ ml: 1, mt: 1 }}>CALCULATE</Button>
    </Box>
    </div>

    </>
  )
}

export default Home