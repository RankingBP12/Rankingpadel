import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ref as storageRef, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { ref as dbRef, push, get, remove } from 'firebase/database';
import { storage, database } from '../../../../firebase.config'; // Asegúrate de importar correctamente
import imageCompression from 'browser-image-compression'; // Importa la librería de compresión
import './BannerModal.css';

const BannerModal = ({ onClose }) => {
  const [title, setTitle] = useState('');
  const [photo, setPhoto] = useState(null);
  const [link, setLink] = useState('');
  const [banners, setBanners] = useState([]); // Estado para almacenar los banners existentes

  // Cargar los banners existentes desde la base de datos
  useEffect(() => {
    const fetchBanners = async () => {
      const bannersRef = dbRef(database, 'banners/');
      const snapshot = await get(bannersRef);
      if (snapshot.exists()) {
        const data = snapshot.val();
        const bannerList = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setBanners(bannerList);
      }
    };
    fetchBanners();
  }, []);

  const handleFileChange = async (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];

      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      };

      try {
        const compressedFile = await imageCompression(file, options);
        setPhoto(compressedFile);
      } catch (error) {
        console.error('Error al comprimir la imagen:', error);
        alert('Hubo un error al comprimir la imagen.');
      }
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();

    if (!photo) {
      alert('Por favor, seleccione una imagen.');
      return;
    }

    try {
      const photoRef = storageRef(storage, `banners/${photo.name}`);
      await uploadBytes(photoRef, photo);
      const photoURL = await getDownloadURL(photoRef);

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

  const handleDelete = async (bannerId, photoURL) => {
    try {
      // Eliminar el archivo de Firebase Storage
      const fileRef = storageRef(storage, `banners/${photoURL.split('%2F')[1].split('?')[0]}`);
      await deleteObject(fileRef);

      // Eliminar el banner de la base de datos
      const bannerRef = dbRef(database, `banners/${bannerId}`);
      await remove(bannerRef);

      // Actualizar el estado de los banners
      setBanners(banners.filter((banner) => banner.id !== bannerId));

      alert('Banner eliminado con éxito');
    } catch (error) {
      console.error('Error al eliminar el banner:', error);
      alert('Hubo un error al eliminar el banner.');
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

        <h3>Banners existentes</h3>
        <div className="banner-list">
          {banners.length === 0 ? (
            <p>No hay banners disponibles.</p>
          ) : (
            <div className="banner-list-container">
              {banners.map((banner) => (
                <div key={banner.id} className="banner-item">
                  <img src={banner.photoURL} alt={banner.title} className="banner-thumbnail" />
                  <p>{banner.title}</p>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(banner.id, banner.photoURL)}
                  >
                    Eliminar
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Define los tipos de las props
BannerModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default BannerModal;
