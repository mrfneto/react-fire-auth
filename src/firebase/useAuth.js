import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from './firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail
} from 'firebase/auth'
import { setFirebaseErrors } from './errors'
export function useAuth() {
  const [message, setMessage] = useState()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  // Create new user
  const register = (email, password) => {
    setLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/')
      })
      .catch(error => {
        setMessage({ type: 'error', text: setFirebaseErrors(error.code) })
      })
      .finally(() => setLoading(false))
  }

  const login = (email, password) => {
    setLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/')
      })
      .catch(error => {
        setMessage({ type: 'error', text: setFirebaseErrors(error.code) })
      })
      .finally(() => setLoading(false))
  }

  const logout = () => {
    setLoading(true)
    signOut(auth)
      .catch(error => {
        setMessage({ type: 'error', text: setFirebaseErrors(error.code) })
      })
      .finally(() => setLoading(false))
  }

  const resetPassword = email => {
    setLoading(true)
    sendPasswordResetEmail(auth, email)
      .then(() => {
        navigate('/')
      })
      .catch(error => {
        setMessage({ type: 'error', text: setFirebaseErrors(error.code) })
      })
      .finally(() => setLoading(false))
  }
  return { message, loading, register, login, logout, resetPassword }
}
