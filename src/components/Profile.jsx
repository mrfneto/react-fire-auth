import { Link } from 'react-router-dom'

export const Profile = () => {
  return (
    <div className="container">
      <div className="card">
        <h1>Update Profile</h1>
        <form>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />
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
          <input
            type="password"
            id="password_confimation"
            name="password_confimation"
            placeholder="Password Confirmation"
            required
          />
          <button>Save</button>
          <Link to="/">Back</Link>
        </form>
      </div>
    </div>
  )
}
