import { Link } from 'react-router-dom'
import { useAuth } from './../firebase/auth'

export const Home = () => {
  const { user } = useAuth()
  return (
    <div className="container">
      <div className="card">
        <div className="card__header">
          <h1 className="title">Welcome: {user ? user.email : 'Mrfneto'}</h1>
        </div>
        <div className="card__content">
          <p>mrfneto@gmail.com</p>
        </div>
        <div className="card__actions">
          <Link className="btn btn--primary" to="/profile">
            Profile
          </Link>
          <Link className="btn btn--secondary" to="login">
            Logout
          </Link>
        </div>
      </div>
    </div>
  )
}
