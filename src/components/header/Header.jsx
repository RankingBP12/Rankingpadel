import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import ReglamentoModal from './ReglamentoModal/ReglamentoModal';
import './Header.css';
import Logo from '../../assets/Header/logo.png';

const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // Usamos una referencia para el menú
  const location = useLocation();

  const hiddenRoutes = ['/admin'];

  // Evitar que se ejecute el código si location.pathname aún no está disponible
  if (!location.pathname || hiddenRoutes.includes(location.pathname)) {
    return null;
  }

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenu = (event) => {
    // Prevenir que el clic en el botón de la hamburguesa cierre el menú
    event.stopPropagation();
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Detectar clics fuera del menú
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Si el clic es fuera del menú y el menú está abierto, cerramos el menú
      if (menuRef.current && !menuRef.current.contains(event.target) && menuOpen) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="Logo" className="logo-img" />
        <span className="neon-text">RANKING PADEL</span>
      </div>
      <button
        className={`hamburger-menu ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu} // Usamos `toggleMenu` para prevenir propagación
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
      <nav ref={menuRef} className={`nav ${menuOpen ? 'open' : ''}`}>
        <button
          onClick={(e) => { scrollToSection(e, 'canchas'); closeMenu(); }}
          className="nav-button"
        >
          Canchas
        </button>
        <button
          onClick={(e) => { scrollToSection(e, 'torneos'); closeMenu(); }}
          className="nav-button"
        >
          Torneos
        </button>
        <button
          onClick={(e) => { scrollToSection(e, 'jugadores'); closeMenu(); }}
          className="nav-button"
        >
          Jugadores
        </button>
        <button
          onClick={(e) => { scrollToSection(e, 'ranking'); closeMenu(); }}
          className="nav-button"
        >
          Ranking
        </button>
        <button
          onClick={() => { openModal(); closeMenu(); }}
          className="nav-button"
        >
          Reglamento
        </button>
      </nav>
      <ReglamentoModal isOpen={modalIsOpen} closeModal={closeModal} />
    </header>
  );
};

export default Header;
