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
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="E-mail"
            required
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
          />

          <button type="submit">Login</button>
        </form>
        <Link to="/register">Don't heva an account?</Link>
        <Link to="/reset-password">Forgot your password?</Link>
      </div>
    </div>
  )
}
