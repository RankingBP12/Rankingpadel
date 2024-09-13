import PropTypes from 'prop-types';
import './AgendaTorneoButton.css';

const AgendaTorneoButton = ({ onClick }) => {
  return (
    <div className="agenda-torneo-card" onClick={onClick}>
      <h1 className="agenda-torneo-text">Agendar Torneo</h1>
    </div>
  );
};

// Define los tipos de las props
AgendaTorneoButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AgendaTorneoButton;
