import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './ModalRanking.css';

const ModalRanking = ({ isOpen, onClose, participants }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredParticipants, setFilteredParticipants] = useState(participants);

  useEffect(() => {
    if (!isOpen) return;

    const handleBack = () => {
      onClose();
      return false; 
    };

    window.history.pushState(null, '', window.location.href);
    window.addEventListener('popstate', handleBack);

    return () => {
      window.removeEventListener('popstate', handleBack);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    const filtered = participants.filter((participant) =>
      participant.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredParticipants(filtered);
  }, [searchTerm, participants]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Ranking Completo</h2>
          <button className="close-btn" onClick={onClose}>Cerrar</button>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Buscar por nombre..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Puntos</th>
            </tr>
          </thead>
          <tbody>
  {filteredParticipants.map((participant) => (
    <tr
      key={participant.id}
      style={
        participant.rank === 1
          ? { backgroundColor: '#5c5be5', color: '#fff', fontWeight: 'bold' }
          : {}
      }
    >
      <td>{participant.rank}</td>
      <td>
        {participant.name}
        {participant.tournamentsPlayed > 0 && (
          <div style={{ fontWeight: 'bold', color: 'violet', marginTop: '4px' }}>
            Torneos jugados: {participant.tournamentsPlayed}
          </div>
        )}
      </td>
      <td className="points-cell">
        {participant.points}
        {participant.rank === 1 && (
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
      </div>
    </div>
  );
};

ModalRanking.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  participants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rank: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      points: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ModalRanking;
