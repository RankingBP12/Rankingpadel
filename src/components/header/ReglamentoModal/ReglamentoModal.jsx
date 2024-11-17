import React, { useEffect, useState } from 'react';
import { ref as dbRef, get } from 'firebase/database';
import { database } from '../../../../firebase.config'; // Asegúrate de importar correctamente
import './ReglamentoModal.css';

const ReglamentoModal = ({ isOpen, closeModal }) => {
  const [pdfUrl, setPdfUrl] = useState(null); // Estado para almacenar la URL del PDF

  // Efecto para manejar la apertura y cierre del modal
  useEffect(() => {
    // Función para obtener la URL del reglamento desde Firebase Database
    const fetchPdfUrl = async () => {
      try {
        const reglamentoRef = dbRef(database, 'reglamentos');
        const snapshot = await get(reglamentoRef);

        if (snapshot.exists()) {
          const data = snapshot.val();
          const lastReglamento = Object.values(data).pop(); // Obtener el último reglamento
          setPdfUrl(lastReglamento.fileURL); // Establecer la URL del PDF
        } else {
          console.log('No se encontró ningún reglamento.');
        }
      } catch (error) {
        console.error('Error al obtener el reglamento:', error);
      }
    };

    // Solo buscar el PDF si el modal está abierto
    if (isOpen) {
      fetchPdfUrl();
    }

    // Cerrar el modal con la tecla 'Escape'
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal(); // Cerrar el modal
      }
    };

    // Agregar el evento de la tecla Escape
    window.addEventListener('keydown', handleEscape);

    // Limpiar el evento de la tecla Escape cuando el componente se desmonte
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, closeModal]);

  // Cerrar el modal cuando se haga clic fuera del contenedor
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal(); // Cerrar el modal si se hace clic en el fondo (overlay)
    }
  };

  if (!isOpen) return null; // Si el modal no está abierto, no renderiza nada

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <h2>Reglamento</h2>
        {pdfUrl ? (
          // Mostrar el PDF usando un iframe
          <iframe
            src={pdfUrl}
            title="Reglamento"
            width="100%"
            height="600px"
            style={{ border: 'none' }}
          />
        ) : (
          <p>Cargando reglamento...</p>
        )}
        <button className="close-button" onClick={closeModal}>Cerrar</button>
      </div>
    </div>
  );
};

export default ReglamentoModal;
