import React from 'react'
import './app.css'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import LoginPage from './scenes/loginPage'
import ProfilePage from './scenes/profilePage'
import HomePage from './homePage'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { themeSettings } from './theme';
import { useEffect } from 'react'




function App() {
// i wanna test my commit

  const mode = useSelector((state) => state.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
const isAuth = Boolean(useSelector((state) => state.token))
  
useEffect(() => {
  localStorage.setItem("token", isAuth);
}, [isAuth]);
  return (
    <div className='app'>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
           
          <Route path='/' element={<LoginPage />} />
            <Route path='/home'
              element={isAuth ? <HomePage /> : <Navigate to ="/" />}          />
          <Route path='/profile/:userId' element={<ProfilePage />} />
          </Routes>
          </ThemeProvider>
      </BrowserRouter>
      
    
    </div>
    
  )
}

export default App
