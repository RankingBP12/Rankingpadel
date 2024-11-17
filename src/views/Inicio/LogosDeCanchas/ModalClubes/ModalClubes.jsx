import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import './ModalClubes.css';

const ModalClubes = ({ club, onClose }) => {
  if (!club) return null;

  useEffect(() => {
    const handleBack = () => {
      onClose();
      return false; // Bloquea la navegación hacia atrás
    };

    // Agrega una entrada al historial para capturar el evento "atrás"
    window.history.pushState(null, '', window.location.href);
    window.addEventListener('popstate', handleBack);

    return () => {
      window.removeEventListener('popstate', handleBack);
    };
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target.className.includes('modal-clubes-overlay')) {
      onClose();
    }
  };

  return (
    <div className="modal-clubes-overlay" onClick={handleOverlayClick}>
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
