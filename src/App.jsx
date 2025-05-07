import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import { DarkModeProvider, useDarkMode } from './context'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'


const ThemedApp = () => {
  const { darkMode } = useDarkMode();
  
  
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      background: {
        default: darkMode ? '#000' : '#fff',
        paper: darkMode ? '#000' : '#fff',
      },
      text: {
        primary: darkMode ? '#fff' : 'rgba(0, 0, 0, 0.87)',
      },
    },
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: darkMode ? 'grey' : 'rgba(0, 0, 0, 0.23)',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: darkMode ? 'grey' : 'rgba(0, 0, 0, 0.87)',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: darkMode ? 'grey' : '#1976d2',
            },
            color: darkMode ? 'white' : 'inherit',
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: darkMode ? 'white' : 'rgba(0, 0, 0, 0.6)',
            '&.Mui-focused': {
              color: darkMode ? 'grey' : '#1976d2',
            },
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          icon: {
            color: darkMode ? 'white' : 'inherit',
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='dash' element={<Home/>} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

function App() {
  return (
    <>
      <DarkModeProvider>
        <ThemedApp />
      </DarkModeProvider>
    </>
  );
}

export default App
