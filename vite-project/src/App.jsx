import './App.css'
import React, { useState } from 'react'
import UseState from './components/UseState'
import UseEffect from './components/UseEffect'
import UseContext from './components/UseContext'


export const ToggleTheme = React.createContext()

function App() {
  
  const [ state , setState] = useState(true)

  const handleToggle = () =>{
    setState(state => !state)
  }

  return (
    <>
      <UseState />
      <UseEffect />

      <ToggleTheme.Provider value={state}>
        <button onClick={handleToggle}>Toggle</button>
        <UseContext />
      </ToggleTheme.Provider>
     
    </>
  )
}

export default App