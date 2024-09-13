import PropTypes from 'prop-types';
import { FaCalendarAlt, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import './ModalTorneo.css';

const ModalTorneo = ({ torneo, onClose }) => {
  if (!torneo) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>{torneo.nombre}</h3>
        <p><FaCalendarAlt /> {torneo.fecha}</p>
        <p><FaMapMarkerAlt /> {torneo.direccion}</p>
        <p><FaPhoneAlt /> <a href={`tel:${torneo.whatsapp}`}>{torneo.whatsapp}</a></p>
        <p>Hora: {torneo.hora}</p>
        {torneo.archivoURL && (
          <p>
            <img src={torneo.archivoURL} alt={torneo.nombre} className="torneo-image" />
          </p>
        )}

      </div>
    </div>
  );
};

ModalTorneo.propTypes = {
  torneo: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    fecha: PropTypes.string.isRequired,
    hora: PropTypes.string, // Puede ser opcional
    telefono: PropTypes.string, // Puede ser opcional
    ubicacion: PropTypes.string, // Puede ser opcional
    archivoURL: PropTypes.string, // Puede ser opcional
  }),
  onClose: PropTypes.func.isRequired,
};

export default ModalTorneo;
