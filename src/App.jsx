import './App.css'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import NavbarComponent from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import NoteState from './Context/notes/NoteState'
import Notes from './components/Notes';
import AlertComponent from './components/Alert'
function App() {

  return (  
    <NoteState>
    <BrowserRouter>
      <NavbarComponent/>
      {/* <AlertComponent alert={"madhur is a bad boy"}/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/notes' element={<Notes/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
    </NoteState>
  )
}

export default App
