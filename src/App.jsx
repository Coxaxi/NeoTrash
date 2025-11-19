import { Routes, Route } from 'react-router-dom'
import './App.css'

import Main from './components/main/main-root'
import Header from './components/Header'
import FloatingAlertCard from './components/main/main-content/FloatingAlertCard'
import Footer from './components/Footer'
import Login from './pages/Login'
import Register from './pages/Register'

function Home() {
  return (
    <div className="bg-[#ffffff] ">
      <FloatingAlertCard />

      <div className=' bg-[#000000c5]'>
        <div id="Home"></div>

        <div className=" max-w-[1280px] m-auto ">
          <Header />

          <Main />

          <Footer />
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default App