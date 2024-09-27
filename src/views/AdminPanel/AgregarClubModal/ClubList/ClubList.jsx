// src/components/ClubList/ClubList.jsx
import React, { useState, useEffect } from 'react';
import { ref as dbRef, onValue, remove } from 'firebase/database';
import { database } from '../../../../firebase.config';
import './ClubList.css';

const ClubList = ({ onEdit }) => {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    const clubsRef = dbRef(database, 'clubs/');
    const unsubscribe = onValue(clubsRef, (snapshot) => {
      const data = snapshot.val();
      const clubsArray = data ? Object.keys(data).map(key => ({ id: key, ...data[key] })) : [];
      setClubs(clubsArray);
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este club?')) {
      remove(dbRef(database, `clubs/${id}`))
        .then(() => alert('Club eliminado con éxito'))
        .catch(error => alert('Hubo un error al eliminar el club:', error));
    }
  };

  return (
    <div className="club-list">
      {clubs.map(club => (
        <div key={club.id} className="club-icon">
          <img src={club.logoURL} alt={club.name} className="club-logo" />
          <div className="club-info">
            <h3>{club.name}</h3>
            <p>Ubicación: {club.location}</p>
            <p>Teléfono: {club.phone}</p>
          </div>
          <div className="club-actions">
            <button onClick={() => onEdit(club)}>Editar</button>
            <button onClick={() => handleDelete(club.id)}>Eliminar</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClubList;
