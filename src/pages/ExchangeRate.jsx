import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns = [
    { field: 'id', headerName: 'currency', width: 1300 },
    { field: 'firstName', headerName: 'Rate', width: 100 },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 389.5887, age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
  
  const paginationModel = { page: 0, pageSize: 5 };

const ExchangeRate = () => {
  return (
    <>
    <div className="px-7 w-full pt-10 ">
        <p className='text-3xl font-medium pb-5'>Live Exchange Rates (Base: USD)</p>
    <Paper sx={{ height: 530, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
       
        sx={{ border: 0 }}
      />
    </Paper>
    </div>
    </>
  )
}

export default ExchangeRate