import { Link, useNavigate } from 'react-router-dom'

export const Login = () => {
  const navigate = useNavigate()
  const handleSubmit = e => {
    e.preventDefault()
    navigate('/')
  }
  return (
    <div className="container">
      <div className="card">
        <div className="card__title">
          <h1>Login</h1>
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

            <button className="btn btn--primary full" type="submit">
              Login
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
