import React from 'react';
import './AgregarReglamentoButton.css';

const AgregarReglamentoButton = ({ onClick }) => {
  return (
    <button className="agregar-reglamento-button" onClick={onClick}>
      Agregar Reglamento
    </button>
  );
};

export default AgregarReglamentoButton;
