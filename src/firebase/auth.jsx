import { createContext, useContext, useEffect, useState } from 'react'
import { auth } from './firebase'
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth'

const AuthContext = createContext({
  user: null,
  isLoading: true
})

export default function useFirebaseAuth() {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoadgin] = useState(true)

  const register = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password)

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password)

  const authStateChanged = async u => {
    setIsLoadgin(true)
    if (!u) {
      setUser(null), setIsLoadgin(false)
    }
    setUser(u)
    setIsLoadgin(false)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authStateChanged)
    return () => unsubscribe()
  }, [])

  return { user, isLoading, register, login }
}

export function AuthProvider({ children }) {
  const auth = useFirebaseAuth()
  return (
    <AuthContext.Provider value={auth}>
      {!auth.isLoading && children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
