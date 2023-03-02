import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className="container">
      <div className="card">
        <h1>Welcome: Mrfneto</h1>
        <Link to="/profile">Profile</Link>
        <Link to="login">Logout</Link>
      </div>
    </div>
  )
}
