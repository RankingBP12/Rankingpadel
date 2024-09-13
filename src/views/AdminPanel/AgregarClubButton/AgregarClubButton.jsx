// src/components/AgregarClubButton/AgregarClubButton.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './AgregarClubButton.css'; // Importa el archivo CSS

const AgregarClubButton = ({ onClick }) => {
  return (
    <button className="agregar-club-button" onClick={onClick}>
      AGREGAR CLUB
    </button>
  );
};

AgregarClubButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AgregarClubButton;
