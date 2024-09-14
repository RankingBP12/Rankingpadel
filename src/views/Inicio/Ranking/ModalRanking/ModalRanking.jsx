import PropTypes from 'prop-types';
import './ModalRanking.css'; // Archivo CSS para estilos

const ModalRanking = ({ isOpen, onClose, participants }) => {
  if (!isOpen) return null; // Si el modal no está abierto, no renderiza nada

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Ranking Completo</h2>
          <button className="close-btn" onClick={onClose}>Cerrar</button>
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
            {participants.map((participant) => (
              <tr
                key={participant.id} // Usar `id` si está disponible, de lo contrario usar `index`
                style={
                  participant.rank === 1
                    ? { backgroundColor: '#5c5be5', color: '#fff', fontWeight: 'bold' }
                    : {}
                }
              >
                <td>{participant.rank}</td>
                <td>{participant.name}</td>
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
      id: PropTypes.number.isRequired, // Añadir id para identificar participantes
      rank: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      points: PropTypes.string.isRequired
    })
  ).isRequired
};

export default ModalRanking;
