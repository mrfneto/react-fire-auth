import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/UserAuthContext'
import { useAuth } from '../firebase/useAuth'

export const Home = () => {
  const { user } = useAuthContext()
  const { logout, loading } = useAuth()

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
            onClick={logout}
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
