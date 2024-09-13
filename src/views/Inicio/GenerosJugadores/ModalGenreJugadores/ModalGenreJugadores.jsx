import { useState } from 'react';
import PropTypes from 'prop-types';
import './ModalGenreJugadores.css';

const ModalGenreJugadores = ({ jugadores, onClose, genero }) => {
  const [activeTab, setActiveTab] = useState('conPuntos');

  // Filtrar y ordenar jugadores
  const jugadoresConPuntos = jugadores.filter(j => j.points > 0).sort((a, b) => b.points - a.points);
  const jugadoresSinPuntos = jugadores.filter(j => j.points === 0).sort((a, b) => a.name.localeCompare(b.name));

  const handleOutsideClick = (e) => {
    if (e.target.className.includes('modal-gnr')) {
      onClose();
    }
  };

  return (
    <div className="modal-gnr" onClick={handleOutsideClick}>
      <div className="modal-gnr-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-gnr-title">
          {genero === 'masculino' ? 'Jugadores Masculinos' : 'Jugadoras Femeninas'}
        </h2>

        <div className="modal-gnr-player-list">
          {activeTab === 'conPuntos' && jugadoresConPuntos.map(jugador => (
            <div key={jugador.id} className="modal-gnr-player-card">
              <img src={jugador.photoURL} alt={jugador.name} className="modal-gnr-player-photo" />
              <div className="modal-gnr-player-info">
                <h4>{jugador.name}</h4>
                <p>{jugador.points} puntos</p>
              </div>
            </div>
          ))}

          {activeTab === 'sinPuntos' && jugadoresSinPuntos.map(jugador => (
            <div key={jugador.id} className="modal-gnr-player-card">
              <img src={jugador.photoURL} alt={jugador.name} className="modal-gnr-player-photo" />
              <div className="modal-gnr-player-info">
                <h4>{jugador.name}</h4>
                <p>Sin puntos</p>
              </div>
            </div>
          ))}
        </div>

        <div className="modal-gnr-tabs-container">
          <button 
            className={`modal-gnr-tab ${activeTab === 'conPuntos' ? 'active' : ''}`} 
            onClick={() => setActiveTab('conPuntos')}
          >
            Con Puntos
          </button>
          <button 
            className={`modal-gnr-tab ${activeTab === 'sinPuntos' ? 'active' : ''}`} 
            onClick={() => setActiveTab('sinPuntos')}
          >
            Sin Puntos
          </button>
        </div>

      </div>
    </div>
  );
};

ModalGenreJugadores.propTypes = {
  jugadores: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, // Cambiado a string para coincidir con el formato de Firebase
      name: PropTypes.string.isRequired,
      points: PropTypes.number.isRequired,
      photoURL: PropTypes.string.isRequired
    })
  ).isRequired,
  onClose: PropTypes.func.isRequired,
  genero: PropTypes.string.isRequired
};

export default ModalGenreJugadores;
