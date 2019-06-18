import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <input
        className="bg-white 
          focus:outline-0 focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
        type="email"
        placeholder="jane@example.com"
      >
        Input
      </input>
    </div>
  )
}

export default App
