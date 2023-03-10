import { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firebase'
import { onAuthStateChanged } from 'firebase/auth'

const UserAuthContext = createContext({
  user: null,
  isLoading: true
})

export default function useFirebaseAuth() {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoadgin] = useState(true)

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

  return { user, isLoading }
}

export function AuthProvider({ children }) {
  const auth = useFirebaseAuth()
  return (
    <UserAuthContext.Provider value={auth}>
      {!auth.isLoading && children}
    </UserAuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(UserAuthContext)
