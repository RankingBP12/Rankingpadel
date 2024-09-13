import React, { useState, useEffect, useContext } from 'react';
import classNames from 'classnames'; // Importa la biblioteca classnames
import { FaSearch, FaMale, FaFemale, FaEdit, FaSave, FaTimes, FaTrash } from 'react-icons/fa';
import { AppContext } from '../../../Context/AppContext'; // Asegúrate de la ruta correcta
import './PlayerTable.css';

const PlayerTable = () => {
  const { jugadores, setJugadores } = useContext(AppContext);
  const [filteredPlayers, setFilteredPlayers] = useState(jugadores);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [pointsFilter, setPointsFilter] = useState('');
  const [editPlayer, setEditPlayer] = useState(null);

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
    let filtered = jugadores.filter(player => player.name.toLowerCase().includes(term.toLowerCase()));
    
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
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditPlayer({ ...editPlayer, [name]: value });
  };

  const handleEditClick = (player) => {
    setEditPlayer(player);
  };

  const handleSaveClick = () => {
    const updatedPlayers = jugadores.map(player => player.id === editPlayer.id ? editPlayer : player);
    setJugadores(updatedPlayers);
    setEditPlayer(null);
    filterPlayers(selectedGender, searchTerm, pointsFilter);
  };

  const handleDeleteClick = (id) => {
    const updatedPlayers = jugadores.filter(player => player.id !== id);
    setJugadores(updatedPlayers);
    filterPlayers(selectedGender, searchTerm, pointsFilter);
  };

  const handleCancelEdit = () => {
    setEditPlayer(null);
  };

  useEffect(() => {
    filterPlayers(selectedGender, searchTerm, pointsFilter);
  }, [searchTerm, selectedGender, pointsFilter, jugadores]);

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
          {filteredPlayers.map(player => (
            <tr key={player.id}>
              <td><img src={player.photoURL} alt={player.name} className="player-photo" /></td>
              <td>
                {editPlayer && editPlayer.id === player.id ? (
                  <input
                    type="text"
                    name="name"
                    value={editPlayer.name}
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
                    value={editPlayer.points}
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
