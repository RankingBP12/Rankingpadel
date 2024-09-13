import { useState } from 'react';
import PropTypes from 'prop-types';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { ref as dbRef, push } from 'firebase/database';
import { storage, database } from '../../../../firebase.config'; // Asegúrate de importar correctamente
import './AgendaTorneoModal.css';

const AgendaTorneoModal = ({ onClose }) => {
  const [nombre, setNombre] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fecha, setFecha] = useState(''); // Fecha en formato yyyy-mm-dd
  const [hora, setHora] = useState(''); // Hora en formato hh:mm
  const [archivo, setArchivo] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setArchivo(e.target.files[0]);
    }
  };

  const formatFecha = (fecha) => {
    if (!fecha) return '';
    const [year, month, day] = fecha.split('-');
    return `${day}/${month}/${year}`;
  };

  const validateDateTime = (fecha, hora) => {
    const torneoDateTime = new Date(`${fecha}T${hora}`);
    const now = new Date();
    return torneoDateTime >= now;
  };

  const handleSave = async (e) => {
    e.preventDefault();

    if (!nombre || !ubicacion || !telefono || !fecha || !hora || !archivo) {
      alert('Por favor, complete todos los campos y seleccione un archivo.');
      return;
    }

    if (!validateDateTime(fecha, hora)) {
      alert('La fecha y hora del torneo no pueden ser anteriores a la fecha y hora actual.');
      return;
    }

    try {
      // Subir el archivo a Firebase Storage
      const archivoRef = storageRef(storage, `torneos/${archivo.name}`);
      await uploadBytes(archivoRef, archivo);
      const archivoURL = await getDownloadURL(archivoRef);

      // Guardar la información en Realtime Database usando `push` para agregar nuevos elementos
      const torneoRef = dbRef(database, 'torneos/');
      await push(torneoRef, {
        nombre,
        ubicacion,
        telefono,
        fecha: formatFecha(fecha), // Guarda la fecha en formato dd/mm/yyyy
        hora,
        archivoURL, // URL del archivo subido
      });

      alert('Torneo guardado con éxito');
      onClose();
    } catch (error) {
      console.error('Error al guardar el torneo:', error);
      alert('Hubo un error al guardar el torneo.');
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('agenda-torneo-modal-overlay')) {
      onClose();
    }
  };

  return (
    <div className="agenda-torneo-modal-overlay" onClick={handleOverlayClick}>
      <div className="agenda-torneo-modal-content">
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2>Agendar Torneo</h2>
        <form className="agenda-torneo-form" onSubmit={handleSave}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre del Torneo</label>
            <input
              id="nombre"
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ingrese el nombre del torneo"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="ubicacion">Ubicación</label>
            <input
              id="ubicacion"
              type="text"
              value={ubicacion}
              onChange={(e) => setUbicacion(e.target.value)}
              placeholder="Ingrese la ubicación"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="telefono">Teléfono</label>
            <input
              id="telefono"
              type="text"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              placeholder="Ingrese el teléfono"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="fecha">Fecha</label>
            <input
              id="fecha"
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="hora">Hora</label>
            <input
              id="hora"
              type="time"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="archivo">Archivo</label>
            <input
              id="archivo"
              type="file"
              accept="application/pdf, image/*" // Permite archivos PDF e imágenes
              onChange={handleFileChange}
              required
            />
          </div>
          <div className="form-actions">
            <button className="save-button" type="submit">Guardar</button>
            <button className="cancel-button" type="button" onClick={onClose}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

AgendaTorneoModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default AgendaTorneoModal;
