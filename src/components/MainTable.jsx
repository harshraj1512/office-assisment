import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { useDarkMode } from '../context'

const MainTable = ({
  loanAmount,
  interestRate,
  termYears,
  emiValue,
  currency
}) => {
  const { darkMode } = useDarkMode()

  const conversionRates = { USD: 1, EUR: 0.85, INR: 82 }
  const rateMonthly = interestRate / 100 / 12
  const totalMonths = termYears * 12
  const rateFactor = conversionRates[currency] || 1

  
  let balance = loanAmount
  const schedule = []
  for (let month = 1; month <= totalMonths; month++) {
    const interestPayment = balance * rateMonthly
    const principalPayment = emiValue - interestPayment
    balance -= principalPayment

    schedule.push({
      month,
      payment: emiValue * rateFactor,
      principal: principalPayment * rateFactor,
      interest: interestPayment * rateFactor,
      balance: Math.max(balance, 0) * rateFactor
    })
  }

  return (
    <div className="px-8 py-4 w-full max-w-7xl mx-auto">
      <p className="text-2xl font-semibold mb-5">
        Amortization schedule ({currency})
      </p>
      <TableContainer
        component={Paper}
        sx={{ backgroundColor: darkMode ? '#111' : '#fff' }}
      >
        <Table aria-label="amortization table">
          <TableHead>
            <TableRow>
              <TableCell>Month</TableCell>
              <TableCell align="right">
                Payment ({currency})
              </TableCell>
              <TableCell align="right">
                Principal ({currency})
              </TableCell>
              <TableCell align="right">
                Interest ({currency})
              </TableCell>
              <TableCell align="right">
                Remaining Balance ({currency})
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {schedule.map(
              ({ month, payment, principal, interest, balance }) => (
                <TableRow
                  key={month}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {month}
                  </TableCell>
                  <TableCell align="right">
                    {payment.toFixed(2)}
                  </TableCell>
                  <TableCell align="right">
                    {principal.toFixed(2)}
                  </TableCell>
                  <TableCell align="right">
                    {interest.toFixed(2)}
                  </TableCell>
                  <TableCell align="right">
                    {balance.toFixed(2)}
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default MainTable
