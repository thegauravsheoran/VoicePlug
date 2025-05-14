import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/Dashboard'

function App() {
 

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-4 font-sans">
        <Dashboard />
      </div>
    </>
  )
}

export default App
