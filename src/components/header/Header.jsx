import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReglamentoModal from './ReglamentoModal/ReglamentoModal';
import './Header.css';
import Logo from '../../assets/Header/logo.png';

const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const location = useLocation();

  // Rutas donde quieres ocultar el Header
  const hiddenRoutes = ['/admin'];

  // Si la ruta actual está en las ocultas, no renderizar el Header
  if (hiddenRoutes.includes(location.pathname)) {
    return null;
  }

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const scrollToSection = (event, sectionId) => {
    event.preventDefault(); // Evita el comportamiento por defecto del enlace
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="Logo" className="logo-img" />
        <span className="neon-text">RANKING PADEL</span>
      </div>
      <nav className="nav">
        <button onClick={(e) => scrollToSection(e, 'canchas')} className="nav-button">Canchas</button>
        <button onClick={(e) => scrollToSection(e, 'torneos')} className="nav-button">Torneos</button>
        <button onClick={(e) => scrollToSection(e, 'jugadores')} className="nav-button">Jugadores</button>
        <button onClick={(e) => scrollToSection(e, 'ranking')} className="nav-button">Ranking</button>
        <button onClick={openModal} className="nav-button">Reglamento</button>
      </nav>
      <ReglamentoModal isOpen={modalIsOpen} closeModal={closeModal} />
    </header>
  );
};

export default Header;
