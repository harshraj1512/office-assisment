import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

const columns = [
    { field: 'currency', headerName: 'Currency', width: 1300 },
    {
      field: 'rate',
      headerName: 'Rate (per USD)',
      type: 'number',
      width: 150,
    },
  ]


const ExchangeRate = () => {
    const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(true)
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 5,
  })

  useEffect(() => {
    axios
      .get(
        'https://v6.exchangerate-api.com/v6/e4b300593c95697ce9b44a67/latest/USD'
      )
      .then((res) => {
        const rates = res.data.conversion_rates || {}
        const mapped = Object.entries(rates).map(([code, rate]) => ({
          id: code,
          currency: code,
          rate,
        }))
        setRows(mapped)
      })
      .catch((err) => {
        console.error('Failed to fetch exchange rates', err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <Box
        sx={{
          height: 400,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CircularProgress />
      </Box>
    )
  }
  return (
    <>
    <div className="px-7 w-full pt-10">
      <p className="text-3xl font-medium pb-7">
        Live Exchange Rates (Base: USD)
      </p>
      <Paper sx={{ height: 530, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pagination
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          pageSizeOptions={[5, 10, 15, 25, 50, 100]}
          sx={{ border: 0 }}
        />
      </Paper>
    </div>
    </>
  )
}

export default ExchangeRate