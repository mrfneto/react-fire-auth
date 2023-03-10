import { Link } from 'react-router-dom'
import { Alert } from './shared/Alert'
import { useAuth } from './../firebase/useAuth'

export const Login = () => {
  const { login, loading, message } = useAuth()

  const handleSubmit = async e => {
    e.preventDefault()
    const { email, password } = e.target.elements
    login(email.value, password.value)
  }

  return (
    <div className="container">
      {message && <Alert type={message.type} msg={message.text} />}
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
