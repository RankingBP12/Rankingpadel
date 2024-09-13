import PropTypes from 'prop-types';
import './AgregarJugadorButton.css';

const AgregarJugadorButton = ({ onClick }) => {
  return (
    <div className="agregar-jugador-card" onClick={onClick}>
      <h1 className="agregar-jugador-text">Agregar Jugador</h1>
    </div>
  );
};


AgregarJugadorButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AgregarJugadorButton;
