import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../../Context/AppContext';
import './CardsTorneos.css';
import ModalTorneo from './CardsModal/ModalTorneo';

const CardsTorneos = () => {
  const { torneos } = useContext(AppContext);
  const [selectedTorneo, setSelectedTorneo] = useState(null);
  const [filteredTorneos, setFilteredTorneos] = useState([]);

  useEffect(() => {
    const currentDate = new Date().toISOString().split('T')[0]; // Obtener solo la parte de la fecha en formato yyyy-mm-dd

    // Filtrar torneos futuros
    const futurosTorneos = torneos.filter(torneo => {
      const torneoDate = torneo.fecha.split('/').reverse().join('-'); // Convertir dd/mm/yyyy a yyyy-mm-dd
      return torneoDate >= currentDate;
    });

    setFilteredTorneos(futurosTorneos);
  }, [torneos]);

  const handleOpenModal = (torneo) => {
    setSelectedTorneo({
      nombre: torneo.nombre || 'Nombre no disponible',
      fecha: torneo.fecha || 'Fecha no disponible',
      direccion: torneo.ubicacion || 'Ubicación no disponible',
      lugar: '', // Asigna un valor por defecto si 'lugar' no está disponible
      whatsapp: torneo.telefono || 'Número no disponible',
      archivoURL: torneo.archivoURL || '',
      hora: torneo.hora || 'Hora no disponible'
    });
  };

  const handleCloseModal = () => {
    setSelectedTorneo(null);
  };

  return (
    <div className="cards-torneos-container">
      {filteredTorneos.length > 0 ? (
        filteredTorneos.map((torneo) => (
          <div key={torneo.id} className="card-torneo">
            <h3 className="card-title">{torneo.nombre}</h3>
            <p className="card-date">{torneo.fecha}</p>
            <p className="card-description">{torneo.descripcion || 'Descripción no disponible'}</p>
            <button className="btn-inscribir" onClick={() => handleOpenModal(torneo)}>Inscribirse</button>
          </div>
        ))
      ) : (
        <p>No hay torneos disponibles.</p>
      )}
      <ModalTorneo torneo={selectedTorneo} onClose={handleCloseModal} />
    </div>
  );
};

export default CardsTorneos;
