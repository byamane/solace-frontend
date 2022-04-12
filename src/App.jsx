import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import Home from './pages/Home/Home'
import SleepList from './pages/SleepList/SleepList'
import AddSleep from './pages/AddSleep/AddSleep'
import * as authService from './services/authService'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [sleepLogs, setSleepLogs] = useState(['sleep', 'sleep2', 'sleep3'])
  const navigate = useNavigate()

  

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <>
      <Routes>
        <Route 
          path="/" 
          element={
            <Landing 
              user={user}
              handleSignupOrLogin={handleSignupOrLogin}
            />} 
        />
        <Route 
          path='/home'
          element={
            <Home 
              user={user}
              handleLogout={handleLogout}
            />
          }
        />
        <Route 
          path='/sleep'
          element={
            <SleepList
              user={user}
              sleepLogs={sleepLogs}
            />
          }
        />
        <Route 
          path='/sleep/new'
          element={
            <AddSleep 
              user={user}
            />
          }
        />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  )
}

export default App
