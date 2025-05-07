import React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import MainTable from './MainTable'

const HomeTable = ({ emiValue, loanAmount, interestRate, termYears, onReset }) => {
  const [currency, setCurrency] = React.useState('USD')
  

  const handleChange = (e) => {
    setCurrency(e.target.value)
  }

  
  const fx = { USD: 1, EUR: 0.85, INR: 82 }
  const rate = fx[currency] || 1


  return (
    <>
      <div className="px-8 py-4 max-w-7xl mx-auto">
        <p className="text-xl font-semibold mb-5">
          Monthly EMI:{' '}
          <span>${emiValue.toFixed(2)}</span>
        </p>

        <FormControl sx={{ width: '100%', mb: 4 }}>
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
                sx={{ minWidth: 120 }}
              >
                <MenuItem value="USD">USD</MenuItem>
                <MenuItem value="EUR">EUR</MenuItem>
                <MenuItem value="INR">INR</MenuItem>
              </Select>
              <p>
                Converted EMI:{' '}
                <span>
                  {(emiValue * rate).toFixed(2)} {currency}
                </span>
              </p>
            </Box>

            <Button
              variant="outlined"
              sx={{
                color: '#9c27b0',
                borderColor: '#9c27b0',
                '&:hover': { borderColor: '#9c27b0' }
              }}
              onClick={onReset}
            >
              RESET TABLE
            </Button>
          </Box>
        </FormControl>
      </div>

      <MainTable emiValue={emiValue} currency={currency} loanAmount={Number(loanAmount)} interestRate={Number(interestRate)} termYears={Number(termYears)}/>
    </>
  )
}

export default HomeTable
