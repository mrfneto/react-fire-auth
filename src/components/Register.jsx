import { Link } from 'react-router-dom'

export const Register = () => {
  return (
    <div className="container">
      <div className="card">
        <h1>Create your account</h1>
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
          <button>Register</button>
          <Link to="/login">Back to login</Link>
        </form>
      </div>
    </div>
  )
}
