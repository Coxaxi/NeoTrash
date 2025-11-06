import logo from './imgs/logo.png'
import './css/cabecalho.css'

function Header () {
  return (
    <div className="Header">
      <div className="logo">
        <img src={logo} className="img-logo" alt="img-logo" />
        <h1 className="text-logo">NeoTrash</h1>
      </div>

      <div className="menu" >
        <ul>
          <li onClick={() => document.getElementById('Home')?.scrollIntoView({ behavior: 'smooth' })}>Home</li>
          <li onClick={() => document.getElementById('Sobre')?.scrollIntoView({ behavior: 'smooth' })}>Sobre</li>
          <li onClick={() => document.getElementById('ComoFunciona')?.scrollIntoView({ behavior: 'smooth' })}>Como Funciona</li>
          <li onClick={() => document.getElementById('Coleta')?.scrollIntoView({ behavior: 'smooth' })}>Pontos de Coleta</li>
          <li onClick={() => document.getElementById('Produtos')?.scrollIntoView({ behavior: 'smooth' })}>Produtos</li>
          <li onClick={() => document.getElementById('Parceiros')?.scrollIntoView({ behavior: 'smooth' })}>Parceiros</li>
          <li onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}>Contato</li>
        </ul>
      </div>
    </div>
  );
}

export default Header