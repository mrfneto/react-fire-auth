import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from './../firebase/auth'
import { setFirebaseErrors } from './../firebase/errors'
import { Alert } from './shared/Alert'

export const Login = () => {
  const [errors, setErrors] = useState()
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    const { email, password } = e.target.elements
    try {
      await login(email.value, password.value)
      navigate('/')
    } catch (error) {
      setErrors({ type: 'error', msg: setFirebaseErrors(error.code) })
      console.log(error.code)
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <div className="container">
      {errors && <Alert type={errors.type} msg={errors.msg} />}
      <div className="card">
        <div className="card__header">
          <h1 className="title">Login</h1>
        </div>
        <div className="card_content">
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

            <button
              className="btn btn--primary full"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Login'}
            </button>
          </form>
        </div>
        <div className="card__actions">
          <Link className="link" to="/register">
            Don't heva an account?
          </Link>
          <Link className="link" to="/reset-password">
            Forgot your password?
          </Link>
        </div>
      </div>
    </div>
  )
}
