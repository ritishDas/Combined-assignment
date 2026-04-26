import './App.css'
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<>home<Link to='/about'>About</Link></>} />
        <Route path='/about' element={<>about<Link to='/'>Home</Link></>} />
        <Route path='*' element={<>404</>} />
      </Routes>
    </>
  )
}

export default App
