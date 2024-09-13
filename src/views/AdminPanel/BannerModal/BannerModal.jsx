// src/views/AdminPanel/BannerModal.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { ref as dbRef, push } from 'firebase/database';
import { storage, database } from '../../../../firebase.config'; // Asegúrate de importar correctamente
import './BannerModal.css';

const BannerModal = ({ onClose }) => {
  const [title, setTitle] = useState('');
  const [photo, setPhoto] = useState(null);
  const [link, setLink] = useState('');

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setPhoto(e.target.files[0]);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();

    if (!photo) {
      alert('Por favor, seleccione una imagen.');
      return;
    }

    try {
      // Subir la imagen a Firebase Storage
      const photoRef = storageRef(storage, `banners/${photo.name}`);
      await uploadBytes(photoRef, photo);
      const photoURL = await getDownloadURL(photoRef);

      // Guardar la información en Realtime Database usando `push` para agregar nuevos elementos
      const bannerRef = dbRef(database, 'banners/');
      await push(bannerRef, {
        title,
        photoURL,
        link,
      });

      alert('Banner guardado con éxito');
      onClose();
    } catch (error) {
      console.error('Error al guardar el banner:', error);
      alert('Hubo un error al guardar el banner.');
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('banner-modal-overlay')) {
      onClose();
    }
  };

  return (
    <div className="banner-modal-overlay" onClick={handleOverlayClick}>
      <div className="banner-modal-content">
        <h2>Cargar Banner</h2>
        <form className="banner-form" onSubmit={handleSave}>
          <div className="form-group">
            <label htmlFor="title">Título</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ingrese el título"
            />
          </div>
          <div className="form-group">
            <label htmlFor="photo">Banner</label>
            <input
              id="photo"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="link">Link</label>
            <input
              id="link"
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="Ingrese el enlace"
            />
          </div>
          <div className="form-actions">
            <button type="submit">Guardar</button>
            <button type="button" onClick={onClose}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Define los tipos de las props
BannerModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default BannerModal;
