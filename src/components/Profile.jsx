import { Link } from 'react-router-dom'

export const Profile = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card__header">
          <h1 className="title">Update Profile</h1>
        </div>
        <div className="card__content">
          <form>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
              className="form__input"
            />
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
            <button className="btn btn--primary full">Save</button>
          </form>
          <div className="card__actions">
            <Link className="link" to="/">
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
