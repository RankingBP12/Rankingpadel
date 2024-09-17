import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { ref, set, get } from 'firebase/database';
import { storage, database } from '../../../../firebase.config';
import './AgregarJugadorModal.css';

const AgregarJugadorModal = ({ onClose, editPlayer, setEditPlayer, jugadores, setJugadores }) => {
  const [name, setName] = useState(editPlayer ? editPlayer.name : '');
  const [photo, setPhoto] = useState(null);
  const [points, setPoints] = useState(editPlayer ? editPlayer.points : '');
  const [gender, setGender] = useState(editPlayer ? editPlayer.gender : '');
  const [category, setCategory] = useState(editPlayer ? editPlayer.category : '');
  const [nextId, setNextId] = useState(null);
  const [avatarURL, setAvatarURL] = useState('');

  useEffect(() => {
    const fetchNextId = async () => {
      try {
        const jugadoresRef = ref(database, 'jugadores/');
        const snapshot = await get(jugadoresRef);
        const players = snapshot.val() || {};

        const ids = Object.keys(players).map(key => players[key].id);
        const maxId = ids.length > 0 ? Math.max(...ids) : 0;
        setNextId(maxId + 1);
      } catch (error) {
        console.error('Error al obtener el siguiente ID:', error);
      }
    };

    fetchNextId();
  }, []);

  useEffect(() => {
    // Generar avatar cuando no se selecciona una foto
    if (!photo && name) {
      const initials = name.split(' ').map(word => word[0]).join('');
      // Reemplaza `styleName` con el estilo que prefieras, por ejemplo: `adventurer`
      const avatarStyle = 'pixel-art-neutral'; 
      const avatarUrl = `https://api.dicebear.com/9.x/${avatarStyle}/svg?seed=${initials}`;
      setAvatarURL(avatarUrl);
    }
  }, [name, photo]);

  const handleSave = async (e) => {
    e.preventDefault();

    const puntos = points.trim() === '' ? 0 : parseInt(points, 10);

    if (!name || !gender || !category) {
      alert('Nombre, género y categoría son obligatorios.');
      return;
    }

    if (isNaN(puntos) || puntos < 0) {
      alert('Los puntos deben ser un número positivo.');
      return;
    }

    try {
      let photoURL = avatarURL; // Usa el avatar si no hay foto

      if (photo) {
        const photoRef = storageRef(storage, `jugadores/${photo.name}`);
        await uploadBytes(photoRef, photo);
        photoURL = await getDownloadURL(photoRef);
      }

      if (editPlayer) {
        const playerRef = ref(database, `jugadores/${editPlayer.id}`);
        await set(playerRef, {
          id: editPlayer.id,
          name,
          points: puntos,
          gender,
          category,
          photoURL,
        });

        const updatedPlayers = { ...jugadores };
        updatedPlayers[editPlayer.id] = {
          id: editPlayer.id,
          name,
          points: puntos,
          gender,
          category,
          photoURL,
        };
        setJugadores(updatedPlayers);

        alert('Jugador actualizado con éxito');
        setEditPlayer(null);
      } else {
        const jugadorRef = ref(database, `jugadores/${nextId}`);
        await set(jugadorRef, {
          id: nextId,
          name,
          points: puntos,
          gender,
          category,
          photoURL,
        });

        const updatedPlayers = { ...jugadores };
        updatedPlayers[nextId] = {
          id: nextId,
          name,
          points: puntos,
          gender,
          category,
          photoURL,
        };
        setJugadores(updatedPlayers);

        alert('Jugador guardado con éxito');
      }

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
    setPhoto(e.target.files[0]);
  };

  return (
    <div className="agregar-jugador-modal-overlay" onClick={handleOverlayClick}>
      <div className="agregar-jugador-modal-content">
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2>{editPlayer ? 'Editar Jugador' : 'Agregar Jugador'}</h2>
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
            <label htmlFor="photo">Foto del Jugador (opcional)</label>
            <input
              id="photo"
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
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
          <div className="form-group">
            <label htmlFor="category">Categoría</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Seleccione una categoría</option>
              <option value="Primera">Primera</option>
              <option value="Segunda">Segunda</option>
              <option value="Tercera">Tercera</option>
              <option value="Cuarta">Cuarta</option>
              <option value="Quinta">Quinta</option>
              <option value="Sexta">Sexta</option>
              <option value="Septima">Séptima</option>
              <option value="OctavaA">Octava A</option>
              <option value="OctavaB">Octava B</option>
            </select>
          </div>
          <div className="form-actions">
            <button className="save-button" type="submit">Guardar</button>
            <button className="cancel-button" type="button" onClick={onClose}>Cancelar</button>
          </div>
        </form>
        {/* Mostrar el avatar o la foto cargada */}
        <div className="avatar-container">
          <img src={photo ? URL.createObjectURL(photo) : avatarURL} alt="Avatar" className="avatar-image" />
        </div>
      </div>
    </div>
  );
};

AgregarJugadorModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  editPlayer: PropTypes.object,
  setEditPlayer: PropTypes.func,
  jugadores: PropTypes.object,
  setJugadores: PropTypes.func,
};

export default AgregarJugadorModal;
