import React, { createContext, useState, useEffect } from 'react';
import { ref, get, remove } from 'firebase/database';
import { database } from '../../firebase.config';

const AppContext = createContext();

const AppProvider = React.memo(({ children }) => {
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

      const handleData = async (key, ref, setState) => {
        const snapshot = await get(ref);
        const data = snapshot.val();
        const dataArray = data ? (Array.isArray(data) ? data : Object.values(data)) : [];

        // Guardar en localStorage solo si se obtiene data válida
        if (dataArray.length > 0) {
          localStorage.setItem(key, JSON.stringify(dataArray));
        }

        // Actualizar estado
        setState(dataArray);
      };

      // Hacer una única solicitud a Firebase cuando se monta el componente
      await handleData('banners', bannersRef, setBanners);
      await handleData('jugadores', jugadoresRef, setJugadores);
      await handleData('torneos', torneosRef, setTorneos);
      await handleData('clubs', clubesRef, setClubes);
    };

    // Cargar datos desde localStorage mientras se obtienen los datos de Firebase
    const bannersData = JSON.parse(localStorage.getItem('banners')) || [];
    const jugadoresData = JSON.parse(localStorage.getItem('jugadores')) || [];
    const torneosData = JSON.parse(localStorage.getItem('torneos')) || [];
    const clubesData = JSON.parse(localStorage.getItem('clubs')) || [];

    if (bannersData.length) setBanners(bannersData);
    if (jugadoresData.length) setJugadores(jugadoresData);
    if (torneosData.length) setTorneos(torneosData);
    if (clubesData.length) setClubes(clubesData);

    fetchData();
  }, []);

  useEffect(() => {
    const removePastTorneos = async () => {
      const currentDate = new Date().toISOString().split('T')[0];

      const futureTorneos = torneos.filter(torneo => {
        const torneoDate = torneo.fecha.split('/').reverse().join('-');
        return torneoDate >= currentDate;
      });

      const torneosRef = ref(database, 'torneos');
      const torneosSnapshot = await get(torneosRef);

      torneosSnapshot.forEach((snapshot) => {
        const torneo = snapshot.val();
        const torneoDate = torneo.fecha.split('/').reverse().join('-');

        if (torneoDate < currentDate) {
          remove(ref(database, `torneos/${snapshot.key}`));
        }
      });

      setTorneos(futureTorneos);
    };

    if (torneos.length) {
      removePastTorneos();
    }
  }, [torneos]);

  return (
    <AppContext.Provider value={{ banners, jugadores, setJugadores, torneos, clubes }}>
      {children}
    </AppContext.Provider>
  );
});

export { AppProvider, AppContext };
