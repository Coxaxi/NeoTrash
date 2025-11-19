import logo from './imgs/logo.png';
import { Menu } from './Menu';
import { useState, useEffect } from 'react';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-2'
          : 'bg-white py-4'
        }`}
    >
      <div className="w-full px-5 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Menu Section - Order 1 on Desktop (Right) */}
          <div className="lg:order-1">
            <Menu />
          </div>

          {/* Logo Section - Order 0 on Desktop (Left) */}
          <div className="flex items-center justify-center lg:justify-start lg:order-0 lg:flex-1">
            <img
              src={logo}
              className={`transition-all duration-300 ${scrolled ? 'w-[60px] lg:w-[90px] h-auto' : 'w-[80px] lg:w-[114px] h-auto'
                }`}
              alt="NeoTrash Logo"
            />
            <h1 className={`font-inter font-bold text-[#49A75D] ml-2 transition-all duration-300 ${scrolled ? 'text-[20px] lg:text-[28px]' : 'text-[24px] lg:text-[32px]'
              }`}>
              NeoTrash
            </h1>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;