import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import HomeTable from '../components/HomeTable'

const Home = () => {
  
  const [loanAmount, setLoanAmount] = useState(100000)
  const [interestRate, setInterestRate] = useState(8.5)
  const [termYears, setTermYears] = useState(5)
  const [emiValue, setEmiValue] = useState(0)

 
  const handleCalculate = () => {
    const p = loanAmount                          
    const R = interestRate / 12 / 100            
    const N = termYears * 12                      

    // EMI formula
    const emi =
      (p * R * Math.pow(1 + R, N)) /
      (Math.pow(1 + R, N) - 1)

    console.log('Calculated EMI:', emi.toFixed(2))
    setEmiValue(emi.toFixed(2))      
  }
  return (
    <>
    <div className="p-44 pt-5 pb-10">
      <h2 className="text-4xl">Loan Calculator Dashboard</h2>
      <Box
        component="form"
        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="loan-amount"
            label="Loan Amount"
            value={loanAmount}
            onChange={e => setLoanAmount(e.target.value)}
          />
          <TextField
            required
            id="interest-rate"
            label="Interest Rate (%)"
            value={interestRate}
            onChange={e => setInterestRate(e.target.value)}
          />
          <TextField
            required
            id="term-years"
            label="Term (Years)"
            value={termYears}
            onChange={e => setTermYears(e.target.value)}
          />
        </div>
        <Button
          variant="contained"
          sx={{ ml: 1, mt: 1 }}
          onClick={handleCalculate}
        >
          CALCULATE
        </Button>
      </Box>
    </div>
    <HomeTable EmiValue={emiValue} />
    </>
  )
}

export default Home
