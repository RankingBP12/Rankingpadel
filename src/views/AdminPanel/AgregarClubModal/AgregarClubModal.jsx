import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { ref as dbRef, push, onValue, remove } from 'firebase/database';
import { storage, database } from '../../../../firebase.config'; // Asegúrate de importar correctamente
import './AgregarClubModal.css';

const AgregarClubModal = ({ onClose }) => {
  const [clubName, setClubName] = useState('');
  const [clubLogo, setClubLogo] = useState(null);
  const [clubLocation, setClubLocation] = useState('');
  const [clubPhone, setClubPhone] = useState('');
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    const clubsRef = dbRef(database, 'clubs/');
    const unsubscribe = onValue(clubsRef, (snapshot) => {
      const data = snapshot.val();
      const clubsArray = data ? Object.keys(data).map(key => ({ id: key, ...data[key] })) : [];
      setClubs(clubsArray);
    });

    return () => unsubscribe();
  }, []);

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setClubLogo(e.target.files[0]);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();

    if (!clubLogo) {
      alert('Por favor, seleccione un logo.');
      return;
    }

    try {
      const logoRef = storageRef(storage, `club-logos/${clubLogo.name}`);
      await uploadBytes(logoRef, clubLogo);
      const logoURL = await getDownloadURL(logoRef);

      const clubRef = dbRef(database, 'clubs/');
      await push(clubRef, {
        name: clubName,
        logoURL,
        location: clubLocation,
        phone: clubPhone,
      });

      alert('Club guardado con éxito');
      onClose();
    } catch (error) {
      console.error('Error al guardar el club:', error);
      alert('Hubo un error al guardar el club.');
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este club?')) {
      remove(dbRef(database, `clubs/${id}`))
        .then(() => alert('Club eliminado con éxito'))
        .catch(error => alert('Hubo un error al eliminar el club:', error));
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('agregar-club-modal-overlay')) {
      onClose();
    }
  };

  return (
    <div className="agregar-club-modal-overlay" onClick={handleOverlayClick}>
      <div className="agregar-club-modal-content">
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2>Agregar Club</h2>
        <form className="agregar-club-form" onSubmit={handleSave}>
          <div className="form-group">
            <label htmlFor="clubName">Nombre del Club</label>
            <input
              id="clubName"
              type="text"
              value={clubName}
              onChange={(e) => setClubName(e.target.value)}
              placeholder="Ingrese el nombre del club"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="clubLogo">Logo del Club</label>
            <input
              id="clubLogo"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="clubLocation">Ubicación del Club</label>
            <input
              id="clubLocation"
              type="text"
              value={clubLocation}
              onChange={(e) => setClubLocation(e.target.value)}
              placeholder="Ingrese la ubicación del club"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="clubPhone">Teléfono del Club</label>
            <input
              id="clubPhone"
              type="text"
              value={clubPhone}
              onChange={(e) => setClubPhone(e.target.value)}
              placeholder="Ingrese el teléfono del club"
              required
            />
          </div>
          <div className="form-actions">
            <button className="save-button" type="submit">Guardar</button>
            <button className="cancel-button" type="button" onClick={onClose}>Cancelar</button>
          </div>
        </form>

        {/* Lista de Clubes */}
        <h3>Lista de Clubes</h3>
        <div className="club-list">
          {clubs.map(club => (
            <div key={club.id} className="club-icon">
              <img src={club.logoURL} alt={club.name} className="club-logo" />
              <div className="club-actions">
                <button onClick={() => handleDelete(club.id)}>Eliminar</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

AgregarClubModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default AgregarClubModal;
