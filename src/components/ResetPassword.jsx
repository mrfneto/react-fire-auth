import { Link } from 'react-router-dom'

export const ResetPassword = () => {
  return (
    <div className="container">
      <div className="card">
        <h1>Reset Password</h1>
        <form>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="E-mail"
            required
          />

          <button>Send</button>

          <Link to="/login">Back to login</Link>
        </form>
      </div>
    </div>
  )
}
