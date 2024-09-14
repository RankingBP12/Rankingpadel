import React, { createContext, useState, useEffect } from 'react';
import { ref, onValue, remove, get } from 'firebase/database';
import { database } from '../../firebase.config';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [banners, setBanners] = useState([]);
  const [jugadores, setJugadores] = useState([]);
  const [torneos, setTorneos] = useState([]);
  const [clubes, setClubes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const bannersRef = ref(database, 'banners');
      const jugadoresRef = ref(database, 'jugadores');
      const torneosRef = ref(database, 'torneos');
      const clubesRef = ref(database, 'clubs');

      const handleData = (key, ref, setState) => {
        onValue(ref, (snapshot) => {
          const data = snapshot.val();
          const dataArray = data ? (Array.isArray(data) ? data : Object.values(data)) : [];
          
          // Store data in localStorage
          localStorage.setItem(key, JSON.stringify(dataArray));

          // Update state
          setState(dataArray);
        });
      };

      handleData('banners', bannersRef, setBanners);
      handleData('jugadores', jugadoresRef, setJugadores);
      handleData('torneos', torneosRef, setTorneos);
      handleData('clubs', clubesRef, setClubes);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const bannersData = JSON.parse(localStorage.getItem('banners')) || [];
    const jugadoresData = JSON.parse(localStorage.getItem('jugadores')) || [];
    const torneosData = JSON.parse(localStorage.getItem('torneos')) || [];
    const clubesData = JSON.parse(localStorage.getItem('clubs')) || [];

    setBanners(bannersData);
    setJugadores(jugadoresData);
    setTorneos(torneosData);
    setClubes(clubesData);
  }, []);

  useEffect(() => {
    const removePastTorneos = async () => {
      const currentDate = new Date().toISOString().split('T')[0]; // Obtener solo la parte de la fecha

      // Filtrar torneos para obtener solo los futuros
      const futureTorneos = torneos.filter(torneo => {
        const torneoDate = torneo.fecha.split('/').reverse().join('-'); // Convertir dd/mm/yyyy a yyyy-mm-dd
        return torneoDate >= currentDate;
      });

      // Obtener todos los torneos actuales
      const torneosRef = ref(database, 'torneos');
      const torneosSnapshot = await get(torneosRef);

      torneosSnapshot.forEach((snapshot) => {
        const torneo = snapshot.val();
        const torneoDate = torneo.fecha.split('/').reverse().join('-');

        if (torneoDate < currentDate) {
          remove(ref(database, `torneos/${snapshot.key}`));
        }
      });

      // Actualizar estado con torneos futuros
      setTorneos(futureTorneos);
    };

    removePastTorneos();
  }, [torneos]);

  return (
    <AppContext.Provider value={{ banners, jugadores, setJugadores, torneos, clubes }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
