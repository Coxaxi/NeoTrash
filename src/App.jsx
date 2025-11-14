import './App.css'

import Main from './components/main/main-root'
import Header from './components/Header'
import FloatingAlertCard from './components/main/main-content/FloatingAlertCard'
import Footer from './components/Footer'

function App() {
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

export default App