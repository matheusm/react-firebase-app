import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import Error from './Error';

export default function Signup() {
  const emailRef = useRef()
  const passowrdRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    if (passowrdRef.current.value !== passwordConfirmRef.current.value)
      return setError('Password does not match')

    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passowrdRef.current.value)
    } catch {
      setError('Failed to create an account')
    }
    setLoading(false)
  }

  return (
    <section className="auth-section">
      <h2 className="title">Sign up</h2>
      {error && <Error type="danger">{error}</Error>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className="label-input">
          E-mail
        </label>
        <input
          type="email"
          name="email"
          id="email"
          ref={emailRef}
          className="input"
        />

        <label htmlFor="password" className="label-input">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          ref={passowrdRef}
          className="input"
        />

        <label htmlFor="passwordConfirm" className="label-input">
          Confirm Password
        </label>
        <input
          type="password"
          name="passwordConfirm"
          id="passwordConfirm"
          ref={passwordConfirmRef}
          className="input"
        />
        <button disabled={loading} className="btn btn-primary" type="submit">
          Sign up
        </button>
      </form>
      <div className="link">Already have account? Log in</div>
    </section>
  )
}
