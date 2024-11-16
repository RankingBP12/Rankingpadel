import React, { useEffect, useState } from 'react';
import { ref as dbRef, get } from 'firebase/database';
import { database } from '../../../../firebase.config'; // Asegúrate de que la configuración esté correctamente importada
import './PopupInicio.css';  // Asegúrate de tener los estilos adecuados

const PopupInicio = () => {
  const [popups, setPopups] = useState([]);
  const [randomPopup, setRandomPopup] = useState(null);
  const [showPopup, setShowPopup] = useState(true); // Estado para controlar la visibilidad del popup

  useEffect(() => {
    // Obtener datos de los popups desde Firebase
    const fetchPopups = async () => {
      try {
        const popupsRef = dbRef(database, 'popup/'); // Ruta correcta según la estructura de Firebase
        const snapshot = await get(popupsRef);

        if (snapshot.exists()) {
          const data = snapshot.val();
          const popupList = Object.keys(data).map(key => ({
            id: key,
            ...data[key]
          }));
          setPopups(popupList);
        } else {
          console.log('No data available');
        }
      } catch (error) {
        console.error('Error al obtener los popups:', error);
      }
    };

    fetchPopups();
  }, []);

  useEffect(() => {
    // Seleccionar una imagen aleatoria
    if (popups.length > 0) {
      const randomIdx = Math.floor(Math.random() * popups.length);
      setRandomPopup(popups[randomIdx]);
    }
  }, [popups]);

  const closePopup = () => {
    setShowPopup(false); // Cerrar el popup
  };

  return (
    showPopup && randomPopup ? (
      <div className="popup-overlay">
        <div className="popup-content">
          <button className="close-btn" onClick={closePopup}>X</button>
          <a href={randomPopup.link || '#'} target={randomPopup.link ? '_blank' : ''} rel="noopener noreferrer">
            <img
              src={randomPopup.photoURL || 'https://via.placeholder.com/500'}
              alt={randomPopup.title || 'Popup Image'}
              className="popup-image"
            />
          </a>
        </div>
      </div>
    ) : null
  );
};

export default PopupInicio;
