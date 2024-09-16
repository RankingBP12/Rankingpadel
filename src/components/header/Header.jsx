import './Header.css';
import Logo from '../../assets/Header/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="Logo" className="logo-img" />
        <span className="neon-text">RANKING PADEL</span>
      </div>
      <nav className="nav">
        <a href="#canchas" className="nav-link">Canchas</a>
        <a href="#torneos" className="nav-link">Torneos</a>
        <a href="#jugadores" className="nav-link">Jugadores</a>
        <a href="#ranking" className="nav-link">Ranking</a>
      </nav>
    </header>
  );
};

export default Header;
