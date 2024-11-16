import { useEffect, useState } from 'react';
import { ref as dbRef, get } from 'firebase/database';
import { database } from '../../../../firebase.config';
import { Link } from 'react-router-dom';
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
          Object.keys(data).forEach(containerKey => {
            const containerItems = Object.keys(data[containerKey]).map(itemKey => ({
              id: itemKey,
              ...data[containerKey][itemKey],
            }));
            containersList.push({
              containerKey,
              containerItems,
              currentImageIndex: 0,
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
    setContainers(prevContainers =>
      prevContainers.map(container => {
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
      updateImageIndex(containers[nextIndex].containerKey);
    }, 1500);

    return () => clearInterval(sequenceInterval);
  }, [currentContainerIndex, containers]);

  return (
    <div className="slider-container">
      {containers.length > 0 ? (
        <div className="slider">
          {containers.slice(0, 3).map((container) => (
            <div key={container.containerKey} className="container-item">
              {container.containerItems.length > 1 ? (
                <ImageSlider
                  containerKey={container.containerKey}
                  images={container.containerItems}
                  currentImageIndex={container.currentImageIndex}
                  updateImageIndex={() => updateImageIndex(container.containerKey)}
                />
              ) : (
                container.containerItems.map((item, index) => (
                  <ImageWithLink
                    key={item.id}
                    image={item}
                  />
                ))
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

const ImageWithLink = ({ image }) => {
  return (
    <a
      href={image.link || '#'}
      target={image.link ? '_blank' : ''}
      rel="noopener noreferrer"
    >
      <img
        src={image.photoURL || 'https://via.placeholder.com/250'}
        alt={image.title}
        style={{ width: '250px', height: '250px', objectFit: 'cover' }}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = 'https://via.placeholder.com/250';
        }}
      />
    </a>
  );
};

const ImageSlider = ({ containerKey, images, currentImageIndex, updateImageIndex }) => {
  return (
    <div className="container-item">
      {images.map((image, index) => (
        <div key={index}>
          {/* Enlace específico para cada imagen */}
          <Link to={image.link || '#'} target={image.link ? '_blank' : ''} rel="noopener noreferrer">
            <img
              src={image.photoURL || 'https://via.placeholder.com/250'}
              alt={image.title}
              className={index === currentImageIndex ? 'show' : 'fade'}
              style={{ objectFit: 'cover' }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/250';
              }}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SliderPublicidad;
