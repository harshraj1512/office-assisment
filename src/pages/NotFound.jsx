import React from 'react'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-6">
      <h1 className="text-4xl">Something went wrong in the application.</h1>
      <Button
        variant="outlined"
        onClick={() => navigate('/')}
      >
        GO Home
      </Button>
    </div>
  )
}

export default NotFound
