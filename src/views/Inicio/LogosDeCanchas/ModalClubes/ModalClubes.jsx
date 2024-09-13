import PropTypes from 'prop-types';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import './ModalClubes.css';

const ModalClubes = ({ club, onClose }) => {
  if (!club) return null;

  return (
    <div className="modal-clubes-overlay" onClick={onClose}>
      <div className="modal-clubes-content" onClick={(e) => e.stopPropagation()}>
        <h3>{club.name}</h3>
        <p><FaMapMarkerAlt /> {club.location}</p>
        <p><FaPhoneAlt /> <a href={`tel:${club.phone}`}>{club.phone}</a></p>
        <img src={club.logoURL} alt="Logo del Club" className="modal-clubes-logo" />
        <button className="modal-clubes-close" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

ModalClubes.propTypes = {
  club: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string,
    phone: PropTypes.string,
    logoURL: PropTypes.string,
  }),
  onClose: PropTypes.func.isRequired,
};

export default ModalClubes;
