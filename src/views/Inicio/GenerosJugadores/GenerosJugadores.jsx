import React, { useContext, useState } from 'react';
import { AppContext } from '../../../Context/AppContext'; // Asegúrate de que la ruta sea correcta
import './GenerosJugadores.css';
import ModalGenreJugadores from './ModalGenreJugadores/ModalGenreJugadores';

const GenerosJugadores = () => {
  const { jugadores } = useContext(AppContext); // Obtén los datos del contexto
  const [showModal, setShowModal] = useState(false);
  const [currentPlayers, setCurrentPlayers] = useState([]);
  const [currentGenre, setCurrentGenre] = useState(''); // Estado para el género actual

  // Filtrar jugadores por género
  const filterPlayersByGenre = (genre) => {
    return jugadores.filter(player => player.gender === genre); // Filtrar por género
  };

  const handleOpenModal = (genre) => {
    const filteredPlayers = filterPlayersByGenre(genre);
    setCurrentPlayers(filteredPlayers);
    setCurrentGenre(genre);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentGenre('');
  };

  return (
    <div className="container-jugadores">
      <div className="player-box male" onClick={() => handleOpenModal('masculino')}>
        <h2>Jugadores Masculinos</h2>
      </div>
      <div className="player-box female" onClick={() => handleOpenModal('femenino')}>
        <h2>Jugadoras Femeninas</h2>
      </div>

      {showModal && (
        <ModalGenreJugadores
          jugadores={currentPlayers}
          onClose={handleCloseModal}
          genero={currentGenre}
        />
      )}
    </div>
  );
};

export default GenerosJugadores;
