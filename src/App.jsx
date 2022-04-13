import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// Components
import Signup from './pages/Signup/Signup'
import Landing from './pages/Landing/Landing'
import Home from './pages/Home/Home'
import SleepList from './pages/SleepList/SleepList'
import SleepForm from './pages/SleepForm/SleepForm'
import SleepDetails from './pages/SleepDetails/SleepDetails'
import JournalList from './pages/JournalList/JournalList'
import JournalForm from './pages/JournalForm/JournalForm'
import JournalDetails from './pages/JournalDetails/JournalDetails'
import Confirmation from './pages/Confirmation/Confirmation'
import Meditation from './pages/Meditation/Meditation'
import NavBarBot from './components/NavBarBot/NavBarBot'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import './App.css'

// Services
import * as authService from './services/authService'
import * as sleepService from './services/sleepService'
import * as journalService from './services/journalService'

import bg0 from '../src/assets/solacebg0.png'
import bg1 from '../src/assets/solacebg1.jpeg'
import bg2 from '../src/assets/solacebg2.jpeg'
import bg3 from '../src/assets/solacebg3.jpeg'
import bg4 from '../src/assets/solacebg4.jpeg'
import bg5 from '../src/assets/solacebg5.jpeg'
import bg6 from '../src/assets/solacebg6.jpeg'
import bg7 from '../src/assets/solacebg7.jpeg'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [sleepLogs, setSleepLogs] = useState([])
  const [journalEntries, setJournalEntries] = useState([])
  const navigate = useNavigate()

  const addSleep = async (sleepData) => {
    const sleep = await sleepService.create(sleepData)
    setSleepLogs([sleep, ...sleepLogs])
  }

  const updateSleep = async (sleepData) => {
    const updatedSleep = await sleepService.update(sleepData)
    setSleepLogs(sleepLogs.map((sleep) => (
      sleep.id === updatedSleep.id ? updatedSleep : sleep
    )))
  }

  const deleteSleep = async (id) => {
    await sleepService.deleteOne(id)
    setSleepLogs(sleepLogs.filter(sleep => sleep.id !== parseInt(id)))
  }

  const addJournal = async (journalData) => {
    const journal =  await journalService.create(journalData)
    setJournalEntries([...journalEntries, journal])
  }

  const updateJournal = async (journalData) => {
    const updatedJournal = await journalService.update(journalData)
    setJournalEntries(journalEntries.map((journal) => (
      journal.id === updatedJournal.id ? updatedJournal : journal
    )))
  }

  const deleteJournal = async (id) => {
    await journalService.deleteOne(id)
    setJournalEntries(journalEntries.filter(journal => journal.id !== parseInt(id)))
  }

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const bgImg = [bg0, bg1, bg2, bg3, bg4, bg5, bg6, bg7]

  return (
    <div 
      id='app-container'
      style={{
        backgroundImage: `url(${bg0})`
      }}
    >
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
              bgImg={bgImg}
              // handleLogout={handleLogout}
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
          path='/sleep/:id/confirmation'
          element={
            <ProtectedRoute user={user}>
              <Confirmation 
                user={user}
                deleteSleep={deleteSleep}
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
                setJournalEntries={setJournalEntries}
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
        <Route 
          path='/journal/:id'
          element={
            <ProtectedRoute user={user}>
              <JournalDetails 
                user={user}
              />
            </ProtectedRoute>
          }
        />
        <Route 
          path='/journal/:id/edit'
          element={
            <ProtectedRoute user={user}>
              <JournalForm 
                user={user}
                updateJournal={updateJournal}
              />
            </ProtectedRoute>
          }
        />
        <Route path="/journal/:id/confirmation" element={
            <ProtectedRoute user={user}>
              <Confirmation deleteJournal={deleteJournal} user={user} />
            </ProtectedRoute>
          } 
        />
        <Route path="/meditation" element={
            <ProtectedRoute user={user}>
              <Meditation user={user} />
            </ProtectedRoute>
          } 
        />
      </Routes>
      {user ? 
        <NavBarBot handleLogout={handleLogout} />
      :
        <></>
      }
    </div>
  )
}

export default App
