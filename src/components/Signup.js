import React, { useRef } from 'react'

export default function Signup() {
  const emailRef = useRef()
  const passowrdRef = useRef()
  const passwordConfirmRef = useRef()

  return (
    <section className="auth-section">
      <h2 className="title">Sign up</h2>
      <form>
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
        <button className="btn btn-primary" type="submit">Sign up</button>
      </form>
      <div className="link">Already have account? Log in</div>
    </section>
  )
}
