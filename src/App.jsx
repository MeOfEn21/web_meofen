import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/logIn/logIn'
import SignUp from './pages/signUp/signUp'
import Home from './pages/home/home'
import Header from './pages/header/header'
import Genre from './pages/genre/genre'
import Country from './pages/country/country'
import PreviewVideo from './pages/videoPreview/videoPreview'
function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/signUp" element={<SignUp/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/genre" element={<Genre/>} /> 
      <Route path="/country" element={<Country/>} />
      <Route path="/movie" element={<Home/>} />
      <Route path="/tvShow" element={<Home/>} />
      <Route path="/profile" element={<Home/>} />
      <Route path='/video/preview' element ={<PreviewVideo/>}/>
    </Routes>
  </Router>
  )
}

export default App
