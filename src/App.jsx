import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet
} from 'react-router-dom'
import { Home } from './components/Home'
import { Profile } from './components/Profile'
import { Register } from './components/Register'
import { Login } from './components/Login'
import { ResetPassword } from './components/ResetPassword'
import { AuthProvider, useAuth } from './firebase/auth'

const RequiresAuth = () => {
  const { user } = useAuth()
  return !user ? <Navigate to="/login" /> : <Outlet />
}
const RequiresUnauth = () => {
  const { user } = useAuth()
  return user ? <Navigate to="/" /> : <Outlet />
}

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<RequiresAuth />}>
              <Route exact path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
            <Route path="/" element={<RequiresUnauth />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/reset-password" element={<ResetPassword />} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}
export default App
