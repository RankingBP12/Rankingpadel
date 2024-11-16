import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ref as storageRef, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { ref as dbRef, push, get, remove } from 'firebase/database';
import { storage, database } from '../../../../firebase.config';
import imageCompression from 'browser-image-compression';
import './BannerModal.css';

const BannerModal = ({ onClose }) => {
  const [title, setTitle] = useState('');
  const [photo, setPhoto] = useState(null);
  const [link, setLink] = useState('');
  const [objectType, setObjectType] = useState('banners'); // banners | popup | containers
  const [viewType, setViewType] = useState('banners'); // banners | popup | containers
  const [items, setItems] = useState([]); // Para almacenar banners o popup contenedores
  const [containerPhotos, setContainerPhotos] = useState([null, null, null]); // Tres imágenes para contenedores
  const [containerTitles, setContainerTitles] = useState(['', '', '']); // Títulos de contenedores
  const [containerLinks, setContainerLinks] = useState(['', '', '']); // Links de contenedores

  useEffect(() => {
    const fetchItems = async () => {
      const itemsRef = dbRef(database, `${viewType}/`);
      const snapshot = await get(itemsRef);
      if (snapshot.exists()) {
        const data = snapshot.val();
        const itemList = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setItems(itemList);
      } else {
        setItems([]);
      }
    };
    fetchItems();
  }, [viewType]);

  const handleFileChange = async (e, index = null) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      const options = { maxSizeMB: 1, maxWidthOrHeight: 1920, useWebWorker: true };
      try {
        const compressedFile = await imageCompression(file, options);
        if (index !== null) {
          const updatedPhotos = [...containerPhotos];
          updatedPhotos[index] = compressedFile;
          setContainerPhotos(updatedPhotos);
        } else {
          setPhoto(compressedFile);
        }
      } catch (error) {
        console.error('Error al comprimir la imagen:', error);
        alert('Hubo un error al comprimir la imagen.');
      }
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const savePhoto = async (photoFile, path) => {
        const photoRef = storageRef(storage, path);
        await uploadBytes(photoRef, photoFile);
        return await getDownloadURL(photoRef);
      };

      if (objectType === 'containers') {
        const containerPromises = [];
        for (const [index, photoFile] of containerPhotos.entries()) {
          if (photoFile) {
            const url = await savePhoto(photoFile, `${objectType}/container${index + 1}/${photoFile.name}`);
            const title = containerTitles[index];
            const link = containerLinks[index]; // Link específico para cada contenedor
            const objectRef = dbRef(database, `${objectType}/container${index + 1}/`);
            containerPromises.push(push(objectRef, { title, photoURL: url, link }));
          }
        }
        await Promise.all(containerPromises);
      } else if (objectType === 'popup') {
        const photoURL = await savePhoto(photo, `${objectType}/${photo.name}`);
        const objectRef = dbRef(database, `${objectType}/`);
        await push(objectRef, { title, photoURL, link });
      } else {
        const photoURL = await savePhoto(photo, `${objectType}/${photo.name}`);
        const objectRef = dbRef(database, `${objectType}/`);
        await push(objectRef, { title, photoURL, link });
      }

      alert('Elemento guardado con éxito');
      onClose();
    } catch (error) {
      console.error('Error al guardar el elemento:', error);
      alert('Hubo un error al guardar el elemento.');
    }
  };

  const handleDelete = async (id, photoURL) => {
    try {
      // Eliminar foto de Firebase Storage
      const photoRef = storageRef(storage, photoURL);
      await deleteObject(photoRef);
      
      // Eliminar entrada de la base de datos
      const itemRef = dbRef(database, `${viewType}/${id}`);
      await remove(itemRef);

      // Actualizar lista de items
      setItems((prevItems) => prevItems.filter((item) => item.id !== id));

      alert('Elemento eliminado con éxito');
    } catch (error) {
      console.error('Error al eliminar el elemento:', error);
      alert('Hubo un error al eliminar el elemento.');
    }
  };

  return (
    <div className="banner-modal-overlay" onClick={(e) => e.target.classList.contains('banner-modal-overlay') && onClose()}>
      <div className="banner-modal-content">
        <h2>Cargar Imagen</h2>
        <form className="banner-form" onSubmit={handleSave}>
          <div className="form-group">
            <label htmlFor="objectType">Tipo de Objeto</label>
            <select id="objectType" value={objectType} onChange={(e) => setObjectType(e.target.value)}>
              <option value="banners">Banners</option>
              <option value="popup">Popup</option>
              <option value="containers">3 Contenedores</option>
            </select>
          </div>
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

          {objectType === 'containers' && (
            <div className="container-photos">
              {[0, 1, 2].map((index) => (
                <div key={index} className="form-group">
                  <label htmlFor={`container-title-${index}`}>Título de Contenedor {index + 1}</label>
                  <input
                    id={`container-title-${index}`}
                    type="text"
                    value={containerTitles[index]}
                    onChange={(e) => {
                      const updatedTitles = [...containerTitles];
                      updatedTitles[index] = e.target.value;
                      setContainerTitles(updatedTitles);
                    }}
                    placeholder={`Título del contenedor ${index + 1}`}
                  />
                  <label htmlFor={`container-link-${index}`}>Link del Contenedor {index + 1}</label>
                  <input
                    id={`container-link-${index}`}
                    type="text"
                    value={containerLinks[index]}
                    onChange={(e) => {
                      const updatedLinks = [...containerLinks];
                      updatedLinks[index] = e.target.value;
                      setContainerLinks(updatedLinks);
                    }}
                    placeholder={`Link del contenedor ${index + 1}`}
                  />
                  <label htmlFor={`photo-${index}`}>Imagen {index + 1}</label>
                  <input
                    id={`photo-${index}`}
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, index)}
                  />
                </div>
              ))}
            </div>
          )}

          {objectType !== 'containers' && (
            <div className="form-group">
              <label htmlFor="link">Link</label>
              <input
                id="link"
                type="text"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="Ingrese el link"
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="photo">Imagen</label>
            <input id="photo" type="file" accept="image/*" onChange={handleFileChange} />
          </div>
          <div className="form-actions">
            <button type="submit">Guardar</button>
            <button type="button" onClick={onClose}>Cancelar</button>
          </div>
        </form>

        <h3>Imágenes existentes</h3>
        <div className="form-group">
          <label htmlFor="viewType">Ver por tipo</label>
          <select id="viewType" value={viewType} onChange={(e) => setViewType(e.target.value)}>
            <option value="banners">Banners</option>
            <option value="popup">Popup</option>
            <option value="containers">3 Contenedores</option>
          </select>
        </div>
        <div className="item-list">
          {items.length === 0 ? (
            <p>No hay elementos disponibles.</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="item">
                <p>{item.title}</p>
                <button onClick={() => handleDelete(item.id, item.photoURL)}>Eliminar</button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

BannerModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default BannerModal;
