import './App.css'

import Main from './components/main/main-root'
import Header from './components/Header'
import FloatingAlertCard from './components/main/main-content/FloatingAlertCard'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-[#ffffff] ">
      <FloatingAlertCard />

      <div id="responsive-warning-overlay">
        <div class="warning-box">
          <h1>Versão Desktop Recomendada</h1>
          <p>
            Desculpe, este site ainda não está otimizado para dispositivos
            móveis.
          </p>
          <p>
            Para uma melhor experiência, por favor, acesse de um computador ou
            ative o "Modo Desktop" no seu navegador.
          </p>
          <p>
            Se estiver em um computador,{' '}
            <span className="text-gray-500">
              tente 'Ctrl' + 'Scroll do mouse (para trás)'
            </span>{' '}
            para ter acesso ao site.
          </p>
        </div>
      </div>

      <div className='bg-[#000000c5]'>
        <div id="Home"></div>

        <div className="max-w-[2000px] m-auto ">
          <Header />

          <Main />

          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App