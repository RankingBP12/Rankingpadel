// src/components/WhatsAppNumberInput.js
import React, { useEffect, useState } from 'react';
import { ref as dbRef, set, get, query, limitToLast } from 'firebase/database';
import { database } from '../../../../firebase.config'; // Asegúrate de importar correctamente

const WhatsAppNumberInput = () => {
  const [whatsAppNumber, setWhatsAppNumber] = useState('');
  const [newWhatsAppNumber, setNewWhatsAppNumber] = useState('');

  // Función para obtener el número de WhatsApp actual de Firebase
  const fetchWhatsAppNumber = async () => {
    try {
      const numberRef = dbRef(database, 'whatsappNumber'); // Ruta donde guardas el número
      const snapshot = await get(numberRef);
      if (snapshot.exists()) {
        setWhatsAppNumber(snapshot.val());
      }
    } catch (error) {
      console.error('Error al obtener el número de WhatsApp:', error);
    }
  };

  // Ejecutar al montar el componente
  useEffect(() => {
    fetchWhatsAppNumber();
  }, []);

  const handleWhatsAppNumberChange = (e) => {
    setNewWhatsAppNumber(e.target.value);
  };

  const handleUpdateWhatsAppNumber = async () => {
    if (newWhatsAppNumber.trim() === '') {
      alert('Por favor, ingresa un número de WhatsApp válido.');
      return;
    }

    try {
      // Guardar el nuevo número en Firebase
      const numberRef = dbRef(database, 'whatsappNumber');
      await set(numberRef, newWhatsAppNumber);
      setWhatsAppNumber(newWhatsAppNumber);
      setNewWhatsAppNumber('');
      alert('Número de WhatsApp actualizado con éxito');
    } catch (error) {
      console.error('Error al actualizar el número de WhatsApp:', error);
      alert('Hubo un error al actualizar el número de WhatsApp.');
    }
  };

  return (
    <div className="whatsapp-settings">
      <h2>Número de WhatsApp Actual: {whatsAppNumber}</h2>
      <input 
        type="text" 
        value={newWhatsAppNumber} 
        onChange={handleWhatsAppNumberChange} 
        placeholder="Nuevo número de WhatsApp"
      />
      <button onClick={handleUpdateWhatsAppNumber}>Actualizar Número</button>
    </div>
  );
};

export default WhatsAppNumberInput;
