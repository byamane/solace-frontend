// import styles from './Landing.module.css'
import './Landing.css'
import { useState } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm'
import solaceTitle from '../../assets/solace_title3.png'

const Landing = ({ user, handleSignupOrLogin }) => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <>
      <img 
        src={solaceTitle} 
        alt="Solace" 
        id="landing-title-img" 
      />
      <p id='log-in-msg'>{message}</p>
      <LoginForm 
        handleSignupOrLogin={handleSignupOrLogin}
        updateMessage={updateMessage}
      />
    </>
  )
}

export default Landing
