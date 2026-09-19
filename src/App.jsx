import { Routes, Route } from 'react-router-dom'
import Cabecalho from './components/Cabecalho'
import Home from './pages/Home'


import './App.css'

function App() {
  return (
    <div>
      <Cabecalho />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App