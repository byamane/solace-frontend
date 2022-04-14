import { useState } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'
import solaceTitle from '../../assets/solace_title3.png'
import './Signup.css'

const Signup = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <>
      <img src={solaceTitle} alt="Solace" id="signup-title-img" />
      <main className='container'>
        <p>{message}</p>
        <SignupForm {...props} updateMessage={updateMessage} />
      </main>
    </>
  )
}

export default Signup
