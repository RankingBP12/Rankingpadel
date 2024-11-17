import { useState, useContext } from 'react';
import { AppContext } from '../../../Context/AppContext'; 
import ModalRanking from './ModalRanking/ModalRanking'; 
import CategoryFilter from '../Categorias/CategoryFilter'; 
import { FaArrowRight } from 'react-icons/fa'; // Flecha hacia la derecha
import './Ranking.css'; 

const RankingFemenino = () => {
  const { jugadores } = useContext(AppContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Septima');

  // Verifica si 'jugadores' es un array y si contiene elementos
  const filteredJugadores = Array.isArray(jugadores) ? jugadores : [];

  // Asegúrate de que cada jugador no sea nulo antes de filtrar
  const validJugadores = filteredJugadores.filter(j => j != null);

  // Obtiene las categorías únicas para mujeres
  const categories = validJugadores
    .filter(j => j.gender === 'femenino')
    .map(j => j.category);
  const uniqueCategories = [...new Set(categories)];
  const hasCategories = uniqueCategories.length > 0;

  // Filtra, ordena y mapea los jugadores femeninos
  const femeninoPlayers = validJugadores
    .filter(j => j.gender === 'femenino' && (selectedCategory === 'Selecciona una categoría' ? j.category === 'Septima' : j.category === selectedCategory))
    .sort((a, b) => b.points - a.points)
    .map((participant, index) => ({ ...participant, rank: index + 1 }));

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleCategoryChange = (category) => setSelectedCategory(category);

  return (
    <div className="ranking-column">
      <div id="header">
        <h1>Ranking Femenino</h1>
      </div>
      <div className="select-container">
        <div className="arrow-bounce">
          <FaArrowRight color="green" size={24} />
        </div>
        <CategoryFilter 
          selectedCategory={selectedCategory} 
          onCategoryChange={handleCategoryChange} 
          categories={hasCategories ? uniqueCategories : ['No hay categorías disponibles']} 
          placeholder="Selecciona una categoría"
        />
      </div>
      <div id="leaderboard">
        <div className="ribbon"></div>
        <table>
          <tbody>
            {femeninoPlayers.length > 0 ? (
              femeninoPlayers.slice(0, 5).map((participant, index) => (
                <tr key={participant.id} className={index === 0 ? 'highlight-row' : ''}>
                  <td className="number">{participant.rank}</td>
                  <td className="name">{participant.name}</td>
                  <td className="points">
                    {participant.points}
                    {index === 0 && (
                      <img
                        className="gold-medal"
                        src="https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true"
                        alt="gold medal"
                      />
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No hay jugadoras disponibles.</td>
              </tr>
            )}
          </tbody>
        </table>
        <button className="ver-mas-btn" onClick={handleOpenModal}>Ver más</button>
      </div>
      <ModalRanking 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        participants={femeninoPlayers} 
      />
    </div>
  );
};

const RankingMasculino = () => {
  const { jugadores } = useContext(AppContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Septima');

  // Verifica si 'jugadores' es un array y si contiene elementos
  const filteredJugadores = Array.isArray(jugadores) ? jugadores : [];

  // Asegúrate de que cada jugador no sea nulo antes de filtrar
  const validJugadores = filteredJugadores.filter(j => j != null);

  // Obtiene las categorías únicas para hombres
  const categories = validJugadores
    .filter(j => j.gender === 'masculino')
    .map(j => j.category);
  const uniqueCategories = [...new Set(categories)];
  const hasCategories = uniqueCategories.length > 0;

  // Filtra, ordena y mapea los jugadores masculinos
  const masculinoPlayers = validJugadores
    .filter(j => j.gender === 'masculino' && (selectedCategory === 'Selecciona una categoría' ? j.category === 'Septima' : j.category === selectedCategory))
    .sort((a, b) => b.points - a.points)
    .map((participant, index) => ({ ...participant, rank: index + 1 }));

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleCategoryChange = (category) => setSelectedCategory(category);

  return (
    <div className="ranking-column">
      <div id="header">
        <h1>Ranking Masculino</h1>
      </div>
      <div className="select-container">
        <div className="arrow-bounce">
          <FaArrowRight color="green" size={24} />
        </div>
        <CategoryFilter 
          selectedCategory={selectedCategory} 
          onCategoryChange={handleCategoryChange} 
          categories={hasCategories ? uniqueCategories : ['No hay categorías disponibles']} 
          placeholder="Selecciona una categoría"
        />
      </div>
      <div id="leaderboard">
        <div className="ribbon"></div>
        <table>
          <tbody>
            {masculinoPlayers.length > 0 ? (
              masculinoPlayers.slice(0, 5).map((participant, index) => (
                <tr key={participant.id} className={index === 0 ? 'highlight-row' : ''}>
                  <td className="number">{participant.rank}</td>
                  <td className="name">{participant.name}</td>
                  <td className="points">
                    {participant.points}
                    {index === 0 && (
                      <img
                        className="gold-medal"
                        src="https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true"
                        alt="gold medal"
                      />
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No hay jugadores disponibles.</td>
              </tr>
            )}
          </tbody>
        </table>
        <button className="ver-mas-btn" onClick={handleOpenModal}>Ver más</button>
      </div>
      <ModalRanking 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        participants={masculinoPlayers} 
      />
    </div>
  );
};

const Ranking = () => (
  <div className="ranking-container">
    <RankingMasculino />
    <RankingFemenino />
  </div>
);

export default Ranking;
