import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../Context/AppContext';
import ModalClubes from './ModalClubes/ModalClubes'; // Asegúrate de importar el componente del modal
import './LogosDeCanchas.css';

const LogosDeCanchas = () => {
  const { clubes } = useContext(AppContext);
  const [logos, setLogos] = useState([]);
  const [selectedClub, setSelectedClub] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    console.log('Datos de clubes recibidos:', clubes); // Verifica los datos recibidos

    if (clubes) {
      // Asegúrate de que clubes sea un array
      const clubesArray = Array.isArray(clubes) ? clubes : Object.values(clubes);

      const filteredLogos = clubesArray
        .filter(club => club.logoURL) // Filtrar clubes que tengan logoURL
        .map(club => ({ ...club, logoURL: club.logoURL })); // Incluye toda la información del club

      // Log para depuración
      console.log('Clubes en el contexto:', clubesArray);
      console.log('Logos filtrados:', filteredLogos);

      setLogos(filteredLogos);
    } else {
      setLogos([]);
    }
  }, [clubes]); // Dependencia en clubes

  const openModal = (club) => {
    setSelectedClub(club);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedClub(null);
  };

  return (
    <div className="carousel-container">
      <h1 className="title">Canchas Belgranenses</h1>
      <div className="carousel">
        <div className="carousel-inner">
          {logos.length > 0 ? (
            logos.map((logo, index) => (
              <div 
                className="logo-circle" 
                key={index}
                onClick={() => openModal(logos[index])} // Agrega el manejador de clic
              >
                <img
                  src={logo.logoURL}
                  alt={`Logo ${index + 1}`}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/150'; // Imagen de placeholder en caso de error
                  }}
                />
              </div>
            ))
          ) : (
            <p>No hay logos disponibles.</p>
          )}
        </div>
      </div>
      {isModalOpen && <ModalClubes club={selectedClub} onClose={closeModal} />}
    </div>
  );
};

export default LogosDeCanchas;
