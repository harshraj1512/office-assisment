import React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const HomeTable = ({ EmiValue }) => {
  const [currency, setCurrency] = React.useState('')

  const handleChange = (event) => {
    setCurrency(event.target.value)
  }

  return (
    <>
    <div className="p-44 pt-0 pb-0">
      <p className="text-xl font-semibold mb-5">
        Monthly EMI: <span>${EmiValue}</span>
      </p>

      <FormControl sx={{ width:  '100%', minWidth: 150 }}>
        <InputLabel id="currency-select-label">Currency</InputLabel>

        
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
            mt: 1
          }}
        >
         
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Select
              labelId="currency-select-label"
              id="currency-select"
              value={currency}
              label="Currency"
              onChange={handleChange}
            >
              <MenuItem value="USD">USD</MenuItem>
              <MenuItem value="EUR">EUR</MenuItem>
              <MenuItem value="INR">INR</MenuItem>
            </Select>
            <p>
              Converted EMI: <span>{EmiValue} {currency || 'USD'}</span>
            </p>
          </Box>

          
          <Button variant="outlined" sx={{ color: '#9c27b0', borderColor: '#9c27b0','&:hover': { borderColor: '#9c27b0',},}} >RESET TABLE</Button>

        </Box>
      </FormControl>
    </div>
    <MainTable/>
    </>
  )
}

export default HomeTable
