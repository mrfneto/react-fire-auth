import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from './../firebase/auth'

export const Home = () => {
  const [loading, setLoading] = useState(false)
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    setLoading(true)
    try {
      await logout()
      navigate('/login')
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className="container">
      <div className="card">
        <div className="card__header">
          <h1 className="title">Welcome:</h1>
        </div>
        <div className="card__content">
          <p>{user ? user.email : 'Mrfneto'}</p>
        </div>
        <div className="card__actions">
          <Link className="btn btn--primary" to="/profile">
            Profile
          </Link>
          <button
            onClick={handleLogout}
            className="btn btn--secondary"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Logout'}
          </button>
        </div>
      </div>
    </div>
  )
}
