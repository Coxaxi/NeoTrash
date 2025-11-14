import logo from './imgs/logo.png';
import './css/cabecalho.css';
import { Menu } from './Menu';

function Header() {
  return (
    <div className="max-h-[100px] Header fixed top-0 left-0 w-full z-50 flex justify-between items-center px-5 py-4 bg-white lg:justify-between">
      {/* Menu - aparece primeiro no mobile, mas reordenado no desktop */}
      <div className="lg:order-1">
        <Menu />
      </div>
      
      {/* Logo - centralizado no mobile, à esquerda no desktop */}
      <div className="logo flex items-center justify-center lg:order-0 lg:flex-1 lg:justify-start">
        <img 
          src={logo} 
          className="img-logo w-[80px] h-auto lg:w-[114px] lg:h-[92px]" 
          alt="NeoTrash Logo" 
        />
        <h1 className="cursor-pointer m-0 text-[#49A75D] w-auto h-auto font-inter font-bold text-[24px] lg:text-[32px] lg:w-[161px] lg:h-[33px] ml-2">
          NeoTrash
        </h1>
      </div>
    </div>
  );
}

export default Header;