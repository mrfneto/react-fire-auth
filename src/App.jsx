import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { Profile } from './components/Profile'
import { Register } from './components/Register'
import { Login } from './components/Login'
import { ResetPassword } from './components/ResetPassword'
import { AuthProvider } from './firebase/auth'

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}
export default App
