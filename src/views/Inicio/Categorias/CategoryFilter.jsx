import React, { useState } from 'react';
import './CategoryFilter.css'; // Asegúrate de que este archivo CSS esté creado
import tennisIcon from '../../../assets/tennis.ico'; // Ajusta la ruta según la estructura de tu proyecto

const CategoryFilter = ({ selectedCategory, onCategoryChange, categories }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCategoryClick = (category) => {
    onCategoryChange(category);
    setIsOpen(false);
  };

  return (
    <div className={`select-menu ${isOpen ? 'active' : ''}`}>
      <div className="select-btn" onClick={() => setIsOpen(!isOpen)}>
        <img src={tennisIcon} alt="Tennis Icon" className="select-icon" />
        <span className="sBtn-text">{selectedCategory || 'Selecciona una categoría'}</span>
      </div>
      <ul className="options">
        {categories.map((category, index) => (
          <li key={index} className="option" onClick={() => handleCategoryClick(category)}>
            <img src={tennisIcon} alt="Tennis Icon" className="category-icon" />
            <span className="option-text">{category}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;
