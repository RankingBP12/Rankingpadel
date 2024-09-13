import { useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../../../Context/AppContext'; // Ajusta la ruta según tu estructura
import ModalRanking from './ModalRanking/ModalRanking'; // Asegúrate de que el modal esté en la ruta correcta
import './Ranking.css'; // Asegúrate de crear este archivo CSS para los estilos

const RankingFemenino = () => {
  const { jugadores } = useContext(AppContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filtrar jugadores femeninos y ordenar
  const femeninoPlayers = jugadores
    .filter(j => j.gender === 'femenino')
    .sort((a, b) => b.points - a.points); // Ordenar por puntos descendente

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="ranking-column">
      <div id="header">
        <h1>Ranking Femenino</h1>
      </div>
      <div id="leaderboard">
        <div className="ribbon"></div>
        <table>
          <tbody>
            {femeninoPlayers.slice(0, 5).map((participant, index) => (
              <tr key={participant.id} className={index === 0 ? 'highlight-row' : ''}>
                <td className="number">{index + 1}</td>
                <td className="name">{participant.name}</td>
                <td className="points">
                  {participant.points}
                  {index === 0 && (
                    <img
                      className="gold-medal"
                      src="https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true"
                      alt="gold medal"
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="ver-mas-btn" onClick={handleOpenModal}>Ver más</button>
      </div>
      <ModalRanking 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        participants={femeninoPlayers} 
      />
    </div>
  );
};

const RankingMasculino = () => {
  const { jugadores } = useContext(AppContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filtrar jugadores masculinos y ordenar
  const masculinoPlayers = jugadores
    .filter(j => j.gender === 'masculino')
    .sort((a, b) => b.points - a.points); // Ordenar por puntos descendente

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="ranking-column">
      <div id="header">
        <h1>Ranking Masculino</h1>
      </div>
      <div id="leaderboard">
        <div className="ribbon"></div>
        <table>
          <tbody>
            {masculinoPlayers.slice(0, 5).map((participant, index) => (
              <tr key={participant.id} className={index === 0 ? 'highlight-row' : ''}>
                <td className="number">{index + 1}</td>
                <td className="name">{participant.name}</td>
                <td className="points">
                  {participant.points}
                  {index === 0 && (
                    <img
                      className="gold-medal"
                      src="https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true"
                      alt="gold medal"
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="ver-mas-btn" onClick={handleOpenModal}>Ver más</button>
      </div>
      <ModalRanking 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        participants={masculinoPlayers} 
      />
    </div>
  );
};

const Ranking = () => (
  <div className="ranking-container">
    <RankingFemenino />
    <RankingMasculino />
  </div>
);

export default Ranking;
