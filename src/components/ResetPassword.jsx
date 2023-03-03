import { Link } from 'react-router-dom'

export const ResetPassword = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card__title">
          <h1>Reset Password</h1>
        </div>
        <div className="card__content">
          <form>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
              required
              className="form__input"
            />

            <button className="btn btn--primary full">Send</button>
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
