import React from 'react'
import Signup from './Signup'
import { AuthProvider } from '../contexts/AuthContext'

function App() {
  return (
    <AuthProvider>
      <div className="container center">
        <Signup />
      </div>
    </AuthProvider>
  )
}

export default App
