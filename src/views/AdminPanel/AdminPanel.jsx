import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase.config';
import CargaBannerButton from './CargarBanner/CargarBannerButton';
import AgendaTorneoButton from './AgendaTorneo/AgendaTorneoButton';
import AgregarJugadorButton from './AgregarJugadorButton/AgregarJugadorButton';
import AgregarClubButton from './AgregarClubButton/AgregarClubButton'; // Importa el nuevo botón
import BannerModal from './BannerModal/BannerModal';
import AgendaTorneoModal from './AgendaTorneoModal/AgendaTorneoModal';
import AgregarJugadorModal from './AgregarJugadorModal/AgregarJugadorModal';
import AgregarClubModal from './AgregarClubModal/AgregarClubModal'; // Importa el nuevo modal
import './AdminPanel.css';
import PlayerTable from './PlayerTable/PlayerTable';

const AdminPanel = () => {
  const navigate = useNavigate();
  const [showBannerModal, setShowBannerModal] = useState(false);
  const [showTorneoModal, setShowTorneoModal] = useState(false);
  const [showJugadorModal, setShowJugadorModal] = useState(false);
  const [showClubModal, setShowClubModal] = useState(false); // Estado para el nuevo modal

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (!user) {
        navigate('/admin-login');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleOpenBannerModal = () => setShowBannerModal(true);
  const handleCloseBannerModal = () => setShowBannerModal(false);

  const handleOpenTorneoModal = () => setShowTorneoModal(true);
  const handleCloseTorneoModal = () => setShowTorneoModal(false);

  const handleOpenJugadorModal = () => setShowJugadorModal(true);
  const handleCloseJugadorModal = () => setShowJugadorModal(false);

  const handleOpenClubModal = () => setShowClubModal(true); // Abre el modal de club
  const handleCloseClubModal = () => setShowClubModal(false); // Cierra el modal de club

  return (
    <div>
      <h1>Admin Panel</h1>
      <div className="admin-panel-buttons">
        <CargaBannerButton onClick={handleOpenBannerModal} />
        <AgendaTorneoButton onClick={handleOpenTorneoModal} />
        <AgregarJugadorButton onClick={handleOpenJugadorModal} />
        <AgregarClubButton onClick={handleOpenClubModal} /> {/* Nuevo botón */}
      </div>
      {showBannerModal && <BannerModal onClose={handleCloseBannerModal} />}
      {showTorneoModal && <AgendaTorneoModal onClose={handleCloseTorneoModal} />}
      {showJugadorModal && <AgregarJugadorModal onClose={handleCloseJugadorModal} />}
      {showClubModal && <AgregarClubModal onClose={handleCloseClubModal} />} {/* Nuevo modal */}
      <PlayerTable />
    </div>
  );
};

export default AdminPanel;
