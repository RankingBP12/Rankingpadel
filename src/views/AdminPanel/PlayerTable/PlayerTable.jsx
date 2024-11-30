import React, { useState, useEffect, useContext } from 'react';
import { FaSearch, FaMale, FaFemale, FaEdit, FaSave, FaTimes, FaTrash } from 'react-icons/fa';
import classNames from 'classnames'; // Importa la biblioteca classnames
import { AppContext } from '../../../Context/AppContext';
import { database } from '../../../../firebase.config';
import { ref, update, remove, get } from 'firebase/database'; // Importa get
import { storage } from '../../../../firebase.config'; // Asegúrate de tener el storage de Firebase configurado
import { uploadBytes, getDownloadURL, ref as storageRef } from 'firebase/storage'; // Importa las funciones para manejar archivos
import './PlayerTable.css';
import GenericPhoto from "../../../assets/GeneroJugadores/nombre.png"

const PlayerTable = () => {
  const { updateJugadores, jugadores } = useContext(AppContext);
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [pointsFilter, setPointsFilter] = useState('');
  const [editPlayer, setEditPlayer] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [playerToDeleteId, setPlayerToDeleteId] = useState(null);
  const [newPhotoFile, setNewPhotoFile] = useState(null);
  const [newCategory, setNewCategory] = useState(''); // Nueva categoría

  useEffect(() => {
    filterPlayers(selectedGender, searchTerm, pointsFilter);
  }, [searchTerm, selectedGender, pointsFilter, jugadores]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleGenderFilter = (gender) => {
    setSelectedGender(gender);
  };

  const handlePointsFilter = (filter) => {
    setPointsFilter(filter);
  };

  const filterPlayers = (gender, term, points) => {
    try {
        const playersArray = Object.keys(jugadores)
            .filter(key => jugadores[key] !== null && jugadores[key] !== undefined)
            .map(key => ({ id: jugadores[key].id, ...jugadores[key] }));
        
        // Validamos que player.name exista antes de aplicar toLowerCase()
        let filtered = playersArray.filter(player => 
            player.name && player.name.toLowerCase().includes(term.toLowerCase())
        );

        if (gender) {
            filtered = filtered.filter(player => player.gender === gender);
        }

        if (points === 'greater') {
            filtered = filtered.filter(player => player.points > 0).sort((a, b) => b.points - a.points);
        } else if (points === 'less') {
            filtered = filtered.filter(player => player.points > 0).sort((a, b) => a.points - b.points);
        } else if (points === 'zero') {
            filtered = filtered.filter(player => player.points === 0).sort((a, b) => a.name.localeCompare(b.name));
        }

        setFilteredPlayers(filtered);
    } catch (error) {
        console.error("Error filtering players:", error);
        setFilteredPlayers([]);
    }
};

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    if (editPlayer) {
      setEditPlayer(prev => ({ ...prev, [name]: value }));
    }
  };

  const handlePhotoChange = (e) => {
    if (e.target.files[0]) {
      setNewPhotoFile(e.target.files[0]);
    }
  };

  const handleEditClick = (player) => {
    setEditPlayer({ ...player });
  };

  // Agrega el campo tournamentsPlayed al guardar o editar
const handleSaveClick = () => {
  if (editPlayer) {
    const playerRef = ref(database, `jugadores/${editPlayer.id}`);
    
    if (newPhotoFile) {
      const photoRef = storageRef(storage, `jugadores/${editPlayer.id}/photo.jpg`);
      
      uploadBytes(photoRef, newPhotoFile)
        .then(snapshot => getDownloadURL(snapshot.ref))
        .then(url => {
          editPlayer.photoURL = url;
          return updatePlayerData(playerRef, editPlayer);
        })
        .catch(error => {
          console.error("Error uploading photo: ", error);
          setError('Error al subir la foto.');
        });
    } else {
      updatePlayerData(playerRef, editPlayer);
    }
  }
};

const updatePlayerData = (playerRef, updatedPlayer) => {
  const playerDataToUpdate = {
    ...updatedPlayer,
    tournamentsPlayed: updatedPlayer.tournamentsPlayed ?? 0,
  };

  if (!newPhotoFile) {
    delete playerDataToUpdate.photoURL;
  }

  update(playerRef, playerDataToUpdate)
    .then(() => {
      const updatedPlayers = { ...jugadores };
      updatedPlayers[updatedPlayer.id] = playerDataToUpdate;

      updateJugadores(updatedPlayers);
      setEditPlayer(null);
      setNewPhotoFile(null);
      filterPlayers(selectedGender, searchTerm, pointsFilter);
    })
    .catch((error) => {
      console.error("Error updating player: ", error);
      setError("Error al guardar los cambios.");
    });
};



  const handleDeleteClick = (id) => {
    setPlayerToDeleteId(id);
    const confirmDelete = window.confirm(`¿Estás seguro de que deseas eliminar el jugador con ID ${id}?`);
    if (confirmDelete) {
      const playerRef = ref(database, `jugadores/${id}`);
      setIsLoading(true);

      get(playerRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            return remove(playerRef);
          } else {
            throw new Error("El jugador no existe.");
          }
        })
        .then(() => {
          const updatedPlayers = Object.keys(jugadores)
            .filter(key => key !== id)
            .reduce((res, key) => {
              res[key] = jugadores[key];
              return res;
            }, {});

          updateJugadores(updatedPlayers);
          localStorage.setItem('jugadores', JSON.stringify(updatedPlayers));
          filterPlayers(selectedGender, searchTerm, pointsFilter);
          setPlayerToDeleteId(null);
        })
        .catch((error) => {
          console.error("Error deleting player:", error);
          setError(`Error al eliminar el jugador: ${error.message}`);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  const handleCancelEdit = () => {
    setEditPlayer(null);
    setNewPhotoFile(null);
  };

  const handleResetPoints = () => {
    const confirmReset = window.confirm('¿Estás seguro de que deseas reiniciar el puntaje de todos los jugadores a 0?');
    
    if (confirmReset) {
      const updates = {};
      
      Object.keys(jugadores).forEach((id) => {
        updates[`jugadores/${id}/points`] = 0;
      });
      
      update(ref(database), updates)
        .then(() => {
          const updatedPlayers = { ...jugadores };
          Object.keys(updatedPlayers).forEach((id) => {
            updatedPlayers[id].points = 0;
          });
          updateJugadores(updatedPlayers);
          filterPlayers(selectedGender, searchTerm, pointsFilter);
        })
        .catch(error => {
          console.error("Error resetting points: ", error);
          setError('Error al reiniciar los puntajes.');
        });
    }
  };

  return (
    <div className="player-table-container">
      <div className="controls">
        <div className="search-bar">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Buscar por nombre..."
          />
          <FaSearch className="search-icon" />
        </div>
        <div className="gender-buttons">
          <button
            className={classNames('filter-button', { 'active': selectedGender === 'masculino' })}
            onClick={() => handleGenderFilter('masculino')}
          >
            <FaMale /> Masculino
          </button>
          <button
            className={classNames('filter-button', { 'active': selectedGender === 'femenino' })}
            onClick={() => handleGenderFilter('femenino')}
          >
            <FaFemale /> Femenino
          </button>
          <button
            className={classNames('filter-button', { 'active': !selectedGender })}
            onClick={() => handleGenderFilter('')}
          >
            Mostrar Todos
          </button>
        </div>
        <div className="points-buttons">
          <button
            className={`filter-button ${pointsFilter === 'greater' ? 'active' : ''}`}
            onClick={() => handlePointsFilter('greater')}
          >
            Mayor Puntaje
          </button>
          <button
            className={`filter-button ${pointsFilter === 'less' ? 'active' : ''}`}
            onClick={() => handlePointsFilter('less')}
          >
            Menor Puntaje
          </button>
          <button
            className={`filter-button ${pointsFilter === 'zero' ? 'active' : ''}`}
            onClick={() => handlePointsFilter('zero')}
          >
            Puntaje 0
          </button>
          <button
            className={`filter-button ${!pointsFilter ? 'active' : ''}`}
            onClick={() => handlePointsFilter('')}
          >
            Mostrar Todos
          </button>
          <button
            className="filter-button reset-points"
            onClick={handleResetPoints}
          >
            Reiniciar Puntajes
          </button>
        </div>
      </div>

      {error && <p className="error">{error}</p>}

      <div className="table-wrapper">
        <table className="player-table">
          <thead>
            <tr>
              <th>Foto</th>
              <th>Nombre</th>
              <th>Género</th>
              <th>Categoría</th>
              <th>Puntos</th>
              <th>Torneos Jugados</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
  {filteredPlayers.map((player) => (
    <tr key={player.id}>
      <td>
        <img
          src={player.photoURL || GenericPhoto}
          alt={player.name}
          className="player-photo"
        />
      </td>
      <td>
        {editPlayer && editPlayer.id === player.id ? (
          <input
            type="text"
            name="name"
            value={editPlayer.name}
            onChange={handleEditChange}
          />
        ) : (
          player.name
        )}
      </td>
      <td>
        {editPlayer && editPlayer.id === player.id ? (
          <input
            type="text"
            name="gender"
            value={editPlayer.gender}
            onChange={handleEditChange}
          />
        ) : (
          player.gender
        )}
      </td>
      <td>
        {editPlayer && editPlayer.id === player.id ? (
          <input
            type="text"
            name="category"
            value={editPlayer.category || ''}
            onChange={handleEditChange}
          />
        ) : (
          player.category || ''
        )}
      </td>
      <td>
        {editPlayer && editPlayer.id === player.id ? (
          <input
            type="number"
            name="points"
            value={editPlayer.points}
            onChange={handleEditChange}
          />
        ) : (
          player.points
        )}
      </td>
      <td>
        {editPlayer && editPlayer.id === player.id ? (
          <input
            type="number"
            name="tournamentsPlayed"
            value={editPlayer.tournamentsPlayed}
            onChange={handleEditChange}
          />
        ) : (
          player.tournamentsPlayed || 0
        )}
      </td>
      <td>
        {editPlayer && editPlayer.id === player.id ? (
          <>
            <button onClick={handleSaveClick}>
              <FaSave /> Guardar
            </button>
            <button onClick={handleCancelEdit}>
              <FaTimes /> Cancelar
            </button>
          </>
        ) : (
          <>
            <button onClick={() => handleEditClick(player)}>
              <FaEdit /> Editar
            </button>
            <button
              onClick={() => handleDeleteClick(player.id)}
              disabled={isLoading && playerToDeleteId === player.id}
            >
              {isLoading && playerToDeleteId === player.id
                ? 'Eliminando...'
                : (
                  <>
                    <FaTrash /> Eliminar
                  </>
                )}
            </button>
          </>
        )}
      </td>
    </tr>
  ))}
</tbody>

        </table>
      </div>
    </div>
  );
};

export default PlayerTable;
