// src/views/AdminPanel/AgregarJugadorModal.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { ref as dbRef, push } from 'firebase/database';
import { storage, database } from '../../../../firebase.config'; // Asegúrate de importar correctamente
import './AgregarJugadorModal.css';

const AgregarJugadorModal = ({ onClose }) => {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState(null); // Estado para la foto
  const [points, setPoints] = useState(''); // Puntos como string
  const [gender, setGender] = useState(''); // Género

  const handleSave = async (e) => {
    e.preventDefault();

    // Convertir puntos a número entero, asignar 0 si está vacío
    const puntos = points.trim() === '' ? 0 : parseInt(points, 10);

    // Validar que nombre, foto y género no estén vacíos
    if (!name || !photo || !gender) {
      alert('Nombre, foto y género son obligatorios.');
      return;
    }

    try {
      // Subir la foto a Firebase Storage
      const photoRef = storageRef(storage, `jugadores/${photo.name}`);
      await uploadBytes(photoRef, photo);
      const photoURL = await getDownloadURL(photoRef);

      // Guardar la información en Realtime Database usando `push` para agregar nuevos elementos
      const jugadorRef = dbRef(database, 'jugadores/');
      await push(jugadorRef, {
        name,
        points: puntos,
        gender,
        photoURL, // URL de la foto subida
      });

      alert('Jugador guardado con éxito');
      onClose();
    } catch (error) {
      console.error('Error al guardar el jugador:', error);
      alert('Hubo un error al guardar el jugador.');
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('agregar-jugador-modal-overlay')) {
      onClose();
    }
  };

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]); // Obtener el archivo seleccionado
  };

  return (
    <div className="agregar-jugador-modal-overlay" onClick={handleOverlayClick}>
      <div className="agregar-jugador-modal-content">
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2>Agregar Jugador</h2>
        <form className="agregar-jugador-form" onSubmit={handleSave}>
          <div className="form-group">
            <label htmlFor="name">Nombre del Jugador</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ingrese el nombre del jugador"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="photo">Foto del Jugador</label>
            <input
              id="photo"
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="points">Puntos</label>
            <input
              id="points"
              type="number"
              value={points}
              onChange={(e) => setPoints(e.target.value)}
              placeholder="Ingrese los puntos"
              min="0"
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Género</label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Seleccione un género</option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
            </select>
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

// Define los tipos de las props
AgregarJugadorModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default AgregarJugadorModal;
