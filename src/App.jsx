import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/logIn/logIn'
import SignUp from './pages/signUp/signUp'
import Home from './pages/home/home'
function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/signUp" element={<SignUp/>}/>
      <Route path="/home" element={<Home/>} />
    </Routes>
  </Router>
  )
}

export default App
