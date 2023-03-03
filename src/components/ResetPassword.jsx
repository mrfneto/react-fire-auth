import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../firebase/auth'
import { setFirebaseErrors } from '../firebase/errors'
import { Alert } from './shared/Alert'

export const ResetPassword = () => {
  const [alert, setAlert] = useState()
  const [loading, setLoading] = useState(false)
  const { resetPassword } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    const { email } = e.target.elements
    try {
      await resetPassword(email.value)
      setAlert({
        type: 'success',
        msg: 'E-mail de recuperação enviado com sucesso.'
      })
      email.value = ''
    } catch (error) {
      setAlert({ type: 'error', msg: setFirebaseErrors(error.code) })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      {alert && <Alert type={alert.type} msg={alert.msg} />}
      <div className="card">
        <div className="card__header">
          <h1 className="title">Reset Password</h1>
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

            <button className="btn btn--primary full" disabled={loading}>
              {loading ? 'Loading...' : 'Confirm'}
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
