import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Banner info_01="OS MELHORES INSTRUMENTOS" info_02="OS MELHORES SONS " />
      
    </>
  )
}

export default App
