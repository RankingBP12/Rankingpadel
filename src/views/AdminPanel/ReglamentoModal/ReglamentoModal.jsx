import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { ref as dbRef, set, get, query, limitToLast } from 'firebase/database';
import { storage, database } from '../../../../firebase.config'; // Asegúrate de importar correctamente
import './ReglamentoModal.css'; // Importa el CSS correspondiente

const ReglamentoModal = ({ onClose }) => {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null); // Estado para almacenar el archivo
  const [lastReglamentoKey, setLastReglamentoKey] = useState(null); // Estado para almacenar la clave del último reglamento

  // Obtener la clave del reglamento actual cuando el componente se monta
  const fetchLastReglamentoKey = async () => {
    try {
      const reglamentoRef = dbRef(database, 'reglamentos');
      const lastReglamentoQuery = query(reglamentoRef, limitToLast(1));
      const snapshot = await get(lastReglamentoQuery);

      if (snapshot.exists()) {
        const data = snapshot.val();
        const key = Object.keys(data)[0]; // Obtener la clave del último reglamento
        setLastReglamentoKey(key);
      }
    } catch (error) {
      console.error('Error al obtener el último reglamento:', error);
    }
  };

  // Se ejecuta al montar el componente
  useEffect(() => {
    fetchLastReglamentoKey();

    // Agregar un estado al historial del navegador
    window.history.pushState({ modalOpen: true }, '');

    // Manejar el evento de retroceso
    const handlePopState = (event) => {
      if (event.state && event.state.modalOpen) {
        onClose();
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      // Limpiar el estado y el evento al desmontar
      window.removeEventListener('popstate', handlePopState);
      if (window.history.state?.modalOpen) {
        window.history.back();
      }
    };
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!title || !file) {
      alert('Por favor, ingrese un título y seleccione un archivo.');
      return;
    }

    try {
      // Subir el archivo a Firebase Storage
      const fileRef = storageRef(storage, `reglamentos/${file.name}`);
      await uploadBytes(fileRef, file);

      // Obtener la URL de descarga del archivo
      const downloadURL = await getDownloadURL(fileRef);

      // Si ya existe un reglamento, reemplázalo con el nuevo
      if (lastReglamentoKey) {
        const reglamentoRef = dbRef(database, `reglamentos/${lastReglamentoKey}`);
        await set(reglamentoRef, {
          title,
          fileURL: downloadURL,
        });
      } else {
        // Si no hay un reglamento existente, crea uno nuevo
        const newReglamentoRef = dbRef(database, 'reglamentos');
        await set(newReglamentoRef, {
          title,
          fileURL: downloadURL,
        });
      }

      alert('Reglamento guardado con éxito');
      onClose();
    } catch (error) {
      console.error('Error al guardar el reglamento:', error);
      alert('Hubo un error al guardar el reglamento.');
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('reglamento-modal__overlay')) {
      onClose();
    }
  };

  return (
    <div className="reglamento-modal__overlay" onClick={handleOverlayClick}>
      <div className="reglamento-modal__content">
        <h2 className="reglamento-modal__title">Cargar Reglamento de Padel</h2>
        <form className="reglamento-modal__form" onSubmit={handleSave}>
          <div className="reglamento-modal__form-group">
            <label htmlFor="title" className="reglamento-modal__label">Título</label>
            <textarea
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ingrese el título"
              className="reglamento-modal__textarea"
            />
          </div>
          <div className="reglamento-modal__form-group">
            <label htmlFor="file" className="reglamento-modal__label">Archivo del Reglamento</label>
            <input
              type="file"
              id="file"
              onChange={handleFileChange}
              className="reglamento-modal__input-file"
            />
          </div>
          <div className="reglamento-modal__actions">
            <button type="submit" className="reglamento-modal__button reglamento-modal__button--save">Guardar</button>
            <button type="button" onClick={onClose} className="reglamento-modal__button reglamento-modal__button--cancel">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Define los tipos de las props
ReglamentoModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ReglamentoModal;
