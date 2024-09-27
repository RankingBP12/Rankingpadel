// src/components/WhatsAppButton.js
import React, { useEffect, useState } from 'react';
import { ref as dbRef, get } from 'firebase/database';
import { database } from '../../../../firebase.config'; // Asegúrate de importar correctamente
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  // Función para obtener el número de WhatsApp desde Firebase
  const fetchWhatsAppNumber = async () => {
    try {
      const numberRef = dbRef(database, 'whatsappNumber'); // Ruta donde está almacenado el número
      const snapshot = await get(numberRef);
      if (snapshot.exists()) {
        setPhoneNumber(snapshot.val()); // Actualiza el estado con el número obtenido
      } else {
        console.log('No se encontró el número de WhatsApp en Firebase.');
      }
    } catch (error) {
      console.error('Error al obtener el número de WhatsApp:', error);
    }
  };

  // Se ejecuta al montar el componente
  useEffect(() => {
    fetchWhatsAppNumber();
  }, []);

  return (
    <div className="wh-api wh-fixed">
      <a 
        href={`https://wa.me/${phoneNumber}`} // Usa el número obtenido
        target="_blank" 
        rel="noopener noreferrer"
      >
        <button className="wh-ap-btn">
          {/* Puedes agregar un texto o ícono aquí */}
        </button>
      </a>
      <span className="wh-ap-tooltip">CONTACTANOS</span>
    </div>
  );
};

export default WhatsAppButton;
