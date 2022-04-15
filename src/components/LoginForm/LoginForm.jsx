import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './LoginForm.css'
import * as authService from '../../services/authService'

const LoginForm = props => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const navigate = useNavigate()

  const handleChange = e => {
    props.updateMessage('')
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      await authService.login(formData)
      props.handleSignupOrLogin()
      navigate('/home')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className='login-signup-form-container'
    >
      <div className='input-container'>
        <label htmlFor="email"
        >
          Email: 
        </label>
        <br />
        <input
          type="text"
          autoComplete="off"
          id="login-email"
          value={formData.email}
          name="email"
          onChange={handleChange}
        />
      </div>
      <div className='input-container'>
        <label htmlFor="password"
        >
          Password: 
        </label>
        <br />
        <input
          type="password"
          autoComplete="off"
          id="login-password"
          value={formData.password}
          name="password"
          onChange={handleChange}
        />
      </div>
      <div className='login-signup-btns-container'>
        <button id='log-in-btn'
        >
          Log In
        </button>
        <Link to="/signup">
          <button id='sign-up-btn'
          >
            Sign up
          </button>
        </Link>
      </div>
    </form>
  )
}

export default LoginForm
