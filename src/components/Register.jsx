import { Link, useNavigate } from 'react-router-dom'

import { useState } from 'react'
import { useAuth } from '../firebase/useAuth'
import { Alert } from './shared/Alert'
// import { setFirebaseErrors } from './../firebase/errors'

export const Register = () => {
  // const [errors, setErrors] = useState()
  // const [loading, setLoading] = useState(false)
  const { register, loading, message } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    // setLoading(true)
    const { email, password, password_confimation } = e.target.elements

    if (password.value !== password_confimation.value) {
      setErrors({ type: 'error', msg: 'Password do not match.' })
      return
    }

    register(email.value, password.value)

    // try {
    //   await register(email.value, password.value)
    //   navigate('/')
    // } catch (error) {
    //   setErrors({ type: 'error', msg: setFirebaseErrors(error.code) })
    //   console.log(error)
    // } finally {
    //   setLoading(false)
    // }
  }

  return (
    <div className="container">
      {message && <Alert type={message.type} msg={message.text} />}
      <div className="card">
        <div className="card__header">
          <h1 className="title">Register</h1>
        </div>
        <div className="card__content">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
              required
              className="form__input"
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
              className="form__input"
            />

            <input
              type="password"
              id="password_confimation"
              name="password_confimation"
              placeholder="Password Confirmation"
              required
              className="form__input"
            />
            <button className="btn btn--primary full" disabled={loading}>
              {loading ? 'Loading...' : 'Register'}
            </button>
          </form>
        </div>
        <div className="card__actions">
          <Link className="link" to="/login">
            Back to login
          </Link>
        </div>
      </div>
    </div>
  )
}
