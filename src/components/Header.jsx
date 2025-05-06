import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Switch from '@mui/material/Switch';

const Header = () => {
  const navigate = useNavigate()                                   
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))       
  const [anchorEl, setAnchorEl] = React.useState(null)
  const label = { inputProps: { 'aria-label': 'Switch demo' } };           

  const handleMenuOpen = e => {
    setAnchorEl(e.currentTarget)                                   
  }
  const handleMenuClose = () => {
    setAnchorEl(null)
  }
  const goTo = path => {                                           
    navigate(path)
    handleMenuClose()
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>                                                 
          { !isDesktop && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
          )}

          {isDesktop ? (
            <>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Loan Calculator
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button color="inherit" onClick={() => goTo('/')}>
                  Home
                </Button>
                <Button color="inherit" onClick={() => goTo('/exchange-rate')}>
                  Exchange Rate
                </Button>
                <Button color="inherit" onClick={() => goTo('/about')}>
                  About
                </Button>
                <Button color="inherit" onClick={() => goTo('/error')}>
                  Error Page
                </Button>
                <Switch {...label} />
              </Box>
            </>
          ) : (
            <>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Loan Calculator
              </Typography>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={() => goTo('/')}>Home</MenuItem>
                <MenuItem onClick={() => goTo('/exchange-rate')}>Exchange Rate</MenuItem>
                <MenuItem onClick={() => goTo('/about')}>About</MenuItem>
                <MenuItem onClick={() => goTo('/error')}>Error Page</MenuItem>
              </Menu>
              <Switch {...label} />
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
