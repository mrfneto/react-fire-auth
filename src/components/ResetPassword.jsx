import { Link } from 'react-router-dom'
import { Alert } from './shared/Alert'
import { useAuth } from './../firebase/useAuth'

export const ResetPassword = () => {
  const { resetPassword, loading, message } = useAuth()

  const handleSubmit = async e => {
    e.preventDefault()
    const { email } = e.target.elements
    resetPassword(email.value)
  }

  return (
    <div className="container">
      {message && <Alert type={message.type} msg={message.msg} />}
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
