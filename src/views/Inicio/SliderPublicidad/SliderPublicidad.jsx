import { useEffect, useState } from 'react';
import { ref as dbRef, get } from 'firebase/database';
import { database } from '../../../../firebase.config';
import "./SliderPublicidad.css";

const SliderPublicidad = () => {
  const [containers, setContainers] = useState([]);
  const [currentContainerIndex, setCurrentContainerIndex] = useState(0);

  useEffect(() => {
    const fetchContainers = async () => {
      try {
        const containersRef = dbRef(database, 'containers/');
        const snapshot = await get(containersRef);

        if (snapshot.exists()) {
          const data = snapshot.val();
          const containersList = [];
          Object.keys(data).forEach((containerKey) => {
            const containerItems = Object.keys(data[containerKey]).map((itemKey) => ({
              id: itemKey,
              ...data[containerKey][itemKey],
            }));
            containersList.push({
              containerKey,
              containerItems,
              currentImageIndex: 0,  // Mantén el índice por cada contenedor
            });
          });
          setContainers(containersList);
        } else {
          console.log('No data available');
        }
      } catch (error) {
        console.error('Error al obtener los contenedores:', error);
      }
    };
    fetchContainers();
  }, []);

  const updateImageIndex = (containerKey) => {
    setContainers((prevContainers) =>
      prevContainers.map((container) => {
        if (container.containerKey === containerKey) {
          const nextIndex = (container.currentImageIndex + 1) % container.containerItems.length;
          return { ...container, currentImageIndex: nextIndex };
        }
        return container;
      })
    );
  };

  useEffect(() => {
    const sequenceInterval = setInterval(() => {
      const nextIndex = (currentContainerIndex + 1) % containers.length;
      setCurrentContainerIndex(nextIndex);

      // Actualizamos el índice de la imagen para el contenedor actual
      if (containers[nextIndex]?.containerItems?.length > 1) {
        updateImageIndex(containers[nextIndex].containerKey);
      }
    }, 1500);

    return () => clearInterval(sequenceInterval);
  }, [currentContainerIndex, containers]);

  return (
    <div className="slider-container">
      {containers.length > 0 ? (
        <div className="slider">
          {containers.map((container) => (
            <div key={container.containerKey} className="container-item">
              {container.containerItems.length > 0 ? (
                container.containerItems.length === 1 ? (
                  <ImageWithLink image={container.containerItems[0]} />
                ) : (
                  <ImageSlider
                    containerKey={container.containerKey}
                    images={container.containerItems}
                    currentImageIndex={container.currentImageIndex}
                  />
                )
              ) : (
                <p>No hay imágenes disponibles</p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>Cargando contenedores...</p>
      )}
    </div>
  );
};

// Modificado: eliminamos la decodificación de URL
const ImageWithLink = ({ image }) => (
  <a
    href={image.link || '#'}
    target={image.link ? '_blank' : ''}
    rel="noopener noreferrer"
  >
    {image.photoURL ? (
      <img
        src={image.photoURL}  // Usamos la URL directamente sin decodificar
        alt={image.title || 'Imagen no disponible'}
        style={{ width: '250px', height: '250px', objectFit: 'cover' }}
      />
    ) : null}
  </a>
);

const ImageSlider = ({ containerKey, images, currentImageIndex }) => {
  const currentImage = images[currentImageIndex];
  return (
    <div className="container-item">
      <a
        href={currentImage.link || '#'}
        target={currentImage.link ? '_blank' : ''}
        rel="noopener noreferrer"
      >
        {currentImage.photoURL ? (
          <img
            src={currentImage.photoURL}  // Usamos la URL directamente sin decodificar
            alt={currentImage.title || 'Imagen no disponible'}
            className="show"
            style={{ objectFit: 'cover' }}
          />
        ) : null}
      </a>
    </div>
  );
};

export default SliderPublicidad;
