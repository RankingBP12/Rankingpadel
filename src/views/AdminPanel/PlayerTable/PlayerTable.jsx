import React, { useState, useEffect, useContext } from 'react';
import { FaSearch, FaMale, FaFemale, FaEdit, FaSave, FaTimes, FaTrash } from 'react-icons/fa';
import classNames from 'classnames'; // Importa la biblioteca classnames
import { AppContext } from '../../../Context/AppContext';
import { database } from '../../../../firebase.config';
import { ref, update, remove, get } from 'firebase/database'; // Importa get
import './PlayerTable.css';

const PlayerTable = () => {
  const { updateJugadores, jugadores } = useContext(AppContext);
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [pointsFilter, setPointsFilter] = useState('');
  const [editPlayer, setEditPlayer] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Nuevo estado para el loading
  const [error, setError] = useState(''); // Nuevo estado para errores
  const [playerToDeleteId, setPlayerToDeleteId] = useState(null); // ID del jugador a eliminar

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
      const playersArray = Object.keys(jugadores).map(key => ({ id: jugadores[key].id, ...jugadores[key] }));
      
      let filtered = playersArray.filter(player => player.name.toLowerCase().includes(term.toLowerCase()));
  
      // Asegurarse de que gender no sea null o undefined antes de filtrar
      if (gender) {
        filtered = filtered.filter(player => player.gender === gender);
      }
  
      if (points === 'greater') {
        filtered = filtered
          .filter(player => player.points > 0)
          .sort((a, b) => b.points - a.points);
      } else if (points === 'less') {
        filtered = filtered
          .filter(player => player.points > 0)
          .sort((a, b) => a.points - b.points);
      } else if (points === 'zero') {
        filtered = filtered
          .filter(player => player.points === 0)
          .sort((a, b) => a.name.localeCompare(b.name));
      }
  
      setFilteredPlayers(filtered);
    } catch (error) {
      console.error("Error filtering players:", error);
      // Puedes manejar el error de alguna forma, como mostrando un mensaje o continuando con el proceso
      setFilteredPlayers([]); // Vacía la lista de jugadores si ocurre un error
    }
  };
  

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    if (editPlayer) {
      setEditPlayer(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleEditClick = (player) => {
    setEditPlayer({ ...player });
  };

  const handleSaveClick = () => {
    if (editPlayer) {
      const playerRef = ref(database, `jugadores/${editPlayer.id}`);
      update(playerRef, { ...editPlayer })
        .then(() => {
          const updatedPlayers = { ...jugadores };
          updatedPlayers[editPlayer.id] = { ...editPlayer };
          updateJugadores(updatedPlayers);
          setEditPlayer(null);
          filterPlayers(selectedGender, searchTerm, pointsFilter);
        })
        .catch(error => {
          console.error("Error updating player: ", error);
          setError('Error al guardar los cambios.');
        });
    }
  };

  const handleDeleteClick = (id) => {
  setPlayerToDeleteId(id);
  const confirmDelete = window.confirm(`¿Estás seguro de que deseas eliminar el jugador con ID ${id}?`);
  if (confirmDelete) {
    console.log("ID del jugador a eliminar:", id);
    console.log("Datos en el contexto:", jugadores);

    const playerRef = ref(database, `jugadores/${id}`);
    setIsLoading(true);
  
    // Verifica si el jugador existe antes de eliminar
    get(playerRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log("Jugador encontrado en Firebase:", snapshot.val());
          return remove(playerRef);
        } else {
          throw new Error("El jugador no existe.");
        }
      })
      .then(() => {
        console.log("Jugador eliminado con éxito.");
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
        </div>
      </div>
      {error && <div className="error-message">{error}</div>} {/* Muestra errores */}
      {isLoading && <div className="loading-message">Eliminando jugador...</div>} {/* Muestra el estado de carga */}
      <table className="player-table">
        <thead>
          <tr className='juegadores'>
            <th>Foto</th>
            <th>Nombre</th>
            <th>Puntos</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredPlayers.map((player, index) => (
            <tr key={`${player.id}-${index}`}>
              <td>
                <img src={player.photoURL} alt={player.name} className="player-photo" />
              </td>
              <td>
                {editPlayer && editPlayer.id === player.id ? (
                  <input
                    type="text"
                    name="name"
                    value={editPlayer.name || ''}
                    onChange={handleEditChange}
                    className="editable-input"
                  />
                ) : (
                  player.name
                )}
              </td>
              <td>
                {editPlayer && editPlayer.id === player.id ? (
                  <input
                    type="number"
                    name="points"
                    value={editPlayer.points || ''}
                    onChange={handleEditChange}
                    className="editable-input"
                  />
                ) : (
                  player.points
                )}
              </td>
              <td>
                {editPlayer && editPlayer.id === player.id ? (
                  <>
                    <button className="action-button save" onClick={handleSaveClick}>
                      <FaSave /> Guardar
                    </button>
                    <button className="action-button cancel" onClick={handleCancelEdit}>
                      <FaTimes /> Cancelar
                    </button>
                  </>
                ) : (
                  <>
                    <button className="action-button edit" onClick={() => handleEditClick(player)}>
                      <FaEdit /> Editar
                    </button>
                    <button className="action-button delete" onClick={() => handleDeleteClick(player.id)}>
                      <FaTrash /> Eliminar
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerTable;
