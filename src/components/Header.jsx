import logo from './imgs/logo.png'
import './css/cabecalho.css'

function Header() {
  return (
    <div className="Header">
      <div className="logo">
        <img src={logo} className="img-logo" alt="img-logo" />
        <h1 className="text-logo">NeoTrash</h1>
      </div>

      <div className="menu" >
        <ul>
          <li><a href="#Home">Home</a></li>
          <li><a href="#Sobre">Sobre</a></li>
          <li><a href="#ComoFunciona">Como Funciona</a></li>
          <li><a href="#Coleta">Coleta</a></li>
          <li><a href="#Produtos">Produtos</a></li>
          <li><a href="#Parceiros">Parceiros</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </div>
    </div>
  );
}
export default Header