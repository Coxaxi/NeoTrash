import { useEffect, useState } from 'react';
import { Container } from './MenuHamburguer';
import logo from './imgs/logo.png'; // Importe a logo para usar no sidebar

export function Menu() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const handleResize = () => {
        const mobile = window.innerWidth <= 1024;
        setIsMobile(mobile);
        if (!mobile) {
            setMenuOpen(true); // Show menu on desktop
        } else {
            setMenuOpen(false); // Hide on mobile until toggled
        }
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape' && menuOpen && isMobile) {
                closeMenu();
            }
        };
        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [menuOpen, isMobile]);

    return (
        <Container isOpen={menuOpen} className="menu flex items-center" role="navigation" aria-label="Main menu">
            {isMobile && (
                <div className="hamburger absolute left-5 cursor-pointer w-[30px] h-[24px] flex flex-col justify-between" onClick={toggleMenu}>
                    <span className={`line bg-[#686868] h-[4px] w-full rounded transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[10px]' : ''}`}></span>
                    <span className={`line bg-[#686868] h-[4px] w-full rounded transition-all duration-300 ${menuOpen ? 'scale-0' : ''}`}></span>
                    <span className={`line bg-[#686868] h-[4px] w-full rounded transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[10px]' : ''}`}></span>
                </div>
            )}
            {menuOpen && isMobile && (
                <div className="sidebar-header flex items-center justify-between p-4 border-b border-[#e5e7eb] bg-[#ffffff]">
                    <div className="sidebar-logo flex items-center gap-2">
                        <img src={logo} className="sidebar-img w-8 h-auto" alt="NeoTrash Logo" />
                        <span className="sidebar-text text-xl text-[#333333] font-bold">NeoTrash</span>
                    </div>
                    <button onClick={closeMenu} aria-label="Close menu" className="text-[#333333] text-[24px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#49A75D]">
                        &times;
                    </button>
                </div>
            )}
            <nav>
                <ul className="flex flex-col-reverse list-none m-0 p-0 gap-0.5 lg:flex-row lg:gap-0.5">
                    {/* Botão de fechar - visível apenas no mobile */}
                    <li className="lg:hidden">
                        

                        <button
                            onClick={closeMenu}
                            aria-label="Fechar menu"
                            className="text-gray-800 text-6xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary hover:text-primary transition-colors w-full text-left px-4 py-2"
                        >
                            ×
                        </button>
                    </li>

                    {/* Itens do menu */}
                    {[
                        { href: "#Home", label: "Home" },
                        { href: "#Sobre", label: "Sobre" },
                        { href: "#ComoFunciona", label: "Como Funciona" },
                        { href: "#Coleta", label: "Pontos de Coleta" },
                        { href: "#Produtos", label: "Produtos" },
                        { href: "#Parceiros", label: "Parceiros" },
                        { href: "#contato", label: "Contato" }
                    ].map((item, index) => (
                        <li key={item.href} className={`
                            text-gray-600 cursor-pointer px-4 py-2.5 transition-all
                            text-xl font-semibold font-inter
                            lg:text-gray-600 lg:text-lg lg:py-3 lg:px-4
                            lg:hover:text-primary lg:hover:scale-105
                            ${index === 0 ? 'mt-8 lg:mt-0' : 'mt-0'}
                            border-b border-gray-100 lg:border-b-0
                            hover:bg-gray-50 lg:hover:bg-transparent
                        `}>
                            <a
                                href={item.href}
                                className="no-underline text-inherit block w-full h-full"
                                onClick={isMobile ? closeMenu : undefined}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            {menuOpen && isMobile && (
                <div className="overlay fixed top-0 left-0 w-full h-full bg-black/30 backdrop-filter backdrop-blur-sm z-[9]" onClick={closeMenu}></div>
            )}
        </Container>
    );
}