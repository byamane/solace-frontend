import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Signup from './pages/Signup/Signup'
import Landing from './pages/Landing/Landing'
import Home from './pages/Home/Home'
import SleepList from './pages/SleepList/SleepList'
import SleepForm from './pages/SleepForm/SleepForm'
import SleepDetails from './pages/SleepDetails/SleepDetails'
import JournalList from './pages/JournalList/JournalList'
import JournalForm from './pages/JournalForm/JournalForm'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import * as authService from './services/authService'
import * as sleepService from './services/sleepService'
import * as journalService from './services/journalService'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [sleepLogs, setSleepLogs] = useState([])
  const [journalEntries, setJournalEntries] = useState([])
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

  const addJournal = async (journalData) => {
    const journal =  await journalService.create(journalData)
    setJournalEntries([...journalEntries, journal])
  }

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await sleepService.getAll()
  //     console.log('all', data)
  //     console.log('1', data[0].profile_id)
  //     console.log('user', user)
  //     console.log('user.id', user.id)
      

  //   }
  //   fetchData()
  // }, [])

  useEffect(() => {
    const fetchData = async () => {
      const data = await journalService.getAll()
      console.log(data)
      data.forEach(journal => {
        if (user.id === journal.profile_id) {
          setJournalEntries([journal, ...journalEntries])
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
                setSleepLogs={setSleepLogs}
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
          path='/sleep/:id'
          element={
            <ProtectedRoute user={user}>
              <SleepDetails 
                user={user}
              />
            </ProtectedRoute>
          }
        />
        <Route 
          path='/sleep/:id/edit'
          element={
            <ProtectedRoute user={user}>
              <SleepForm 
                user={user}
                updateSleep={updateSleep}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route 
          path='/journal'
          element={
            <ProtectedRoute user={user}>
              <JournalList
                user={user}
                journalEntries={journalEntries}
                />
            </ProtectedRoute>
          }
        />
        <Route 
          path='/journal/new'
          element={
            <ProtectedRoute user={user}>
              <JournalForm 
                user={user}
                addJournal={addJournal}
              />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
