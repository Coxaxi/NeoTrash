import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom'; // Import Link
import logo from './imgs/logo.png'; // Importe a logo para usar no sidebar

export function Menu() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 1024;
            setIsMobile(mobile);
            if (!mobile) setMenuOpen(false);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (menuOpen && isMobile) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [menuOpen, isMobile]);

    const menuItems = [
        { href: "#Home", label: "Home" },
        { href: "#Sobre", label: "Sobre" },
        { href: "#ComoFunciona", label: "Como Funciona" },
        { href: "#Coleta", label: "Pontos de Coleta" },
        { href: "#Produtos", label: "Produtos" },
        { href: "#Parceiros", label: "Parceiros" },
        { href: "#contato", label: "Contato" }
    ];

    // Mobile Menu Content (Drawer + Overlay)
    const MobileMenu = (
        <>
            {/* Mobile Overlay */}
            <div
                className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-[9998] transition-opacity duration-300 ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                onClick={closeMenu}
            />

            {/* Menu Drawer */}
            <div className={`
                fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl z-[9999]
                transform transition-transform duration-300 ease-out
                ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
            `}>
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                        <img src={logo} className="w-8 h-auto" alt="NeoTrash Logo" />
                        <span className="text-lg font-bold text-[#333333]">NeoTrash</span>
                    </div>
                    <button
                        onClick={closeMenu}
                        className="p-2 text-gray-500 hover:text-[#49A75D] transition-colors"
                    >
                        <span className="text-2xl">&times;</span>
                    </button>
                </div>

                {/* Navigation Links */}
                <ul className="flex flex-col p-4 gap-2">
                    {menuItems.map((item) => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                onClick={closeMenu}
                                className="
                                    block py-3 px-4 text-lg font-medium text-gray-600 rounded-lg
                                    transition-all duration-200
                                    hover:bg-green-50 hover:text-[#49A75D] hover:pl-6
                                "
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                    {/* Mobile Login Button */}
                    <li>
                        <Link
                            to="/login"
                            onClick={closeMenu}
                            className="
                                block py-3 px-4 text-lg font-medium text-white bg-[#49A75D] rounded-lg
                                transition-all duration-200 text-center mt-4 shadow-md
                                hover:bg-[#3d8b4d] hover:shadow-lg
                            "
                        >
                            Login
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );

    return (
        <nav className="relative" role="navigation" aria-label="Main menu">
            {/* Hamburger Button (Visible on Mobile) */}
            {isMobile && (
                <button
                    onClick={toggleMenu}
                    className="relative z-50 w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                >
                    <span className={`block w-6 h-0.5 bg-[#49A75D] transition-all duration-300 ease-out ${menuOpen ? 'rotate-45 translate-y-2' : ''
                        }`} />
                    <span className={`block w-6 h-0.5 bg-[#49A75D] transition-all duration-300 ease-out ${menuOpen ? 'opacity-0' : ''
                        }`} />
                    <span className={`block w-6 h-0.5 bg-[#49A75D] transition-all duration-300 ease-out ${menuOpen ? '-rotate-45 -translate-y-2' : ''
                        }`} />
                </button>
            )}

            {/* Render Mobile Menu via Portal */}
            {isMobile && createPortal(MobileMenu, document.body)}

            {/* Desktop Menu (Visible on Desktop) */}
            {!isMobile && (
                <ul className="flex flex-row gap-1 items-center">
                    {menuItems.map((item) => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                className="
                                    block py-2 px-4 text-lg text-gray-600 font-semibold
                                    hover:text-[#49A75D] hover:scale-105 transition-all duration-200
                                "
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                    {/* Desktop Login Button */}
                    <li className="ml-4">
                        <Link
                            to="/login"
                            className="
                                block py-2 px-6 text-lg font-bold text-white bg-[#49A75D] rounded-full
                                hover:bg-[#3d8b4d] hover:scale-105 transition-all duration-200 shadow-md
                            "
                        >
                            Login
                        </Link>
                    </li>
                </ul>
            )}
        </nav>
    );
}