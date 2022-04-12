import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Signup from './pages/Signup/Signup'
import Landing from './pages/Landing/Landing'
import Home from './pages/Home/Home'
import SleepList from './pages/SleepList/SleepList'
import SleepForm from './pages/SleepForm/SleepForm'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import * as authService from './services/authService'
import * as sleepService from './services/sleepService'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [sleepLogs, setSleepLogs] = useState([])
  const navigate = useNavigate()

  const addSleep = async (sleepData) => {
    const sleep = await sleepService.create(sleepData)
    setSleepLogs([...sleepLogs, sleep])
  }

  const updateSleep = async (sleepData) => {
    const updatedSleep = await sleepService.update(sleepData)
    setSleepLogs(sleepLogs.map((sleep) => (
      sleep.id === updatedSleep.id ? updatedSleep : sleep
    )))
  }

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await sleepService.getAll()
      console.log(data)
      data.forEach(sleep => {
        if (user.id === sleep.profile_id) {
          setSleepLogs([sleep, ...sleepLogs])
        }
      })
    }
    fetchData()
  }, [])

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
            <ProtectedRoute user={user}>
              <SleepList
                user={user}
                sleepLogs={sleepLogs}
              />
            </ProtectedRoute>
          }
        />
        <Route 
          path='/sleep/new'
          element={
            <ProtectedRoute user={user}>
              <SleepForm 
                user={user}
                addSleep={addSleep}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
      </Routes>
    </>
  )
}

export default App
