import { useState } from 'react'
import Header from './Components/Header.jsx'
import StartingPage from './StartingPage/StartingPage.jsx'

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous"></link>
      <Header/>
      <StartingPage/>
    </>
  )
}

export default App
