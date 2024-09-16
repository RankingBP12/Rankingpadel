import React, { Suspense, lazy, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase.config';
import './AdminPanel.css';

const CargaBannerButton = lazy(() => import('./CargarBanner/CargarBannerButton'));
const AgendaTorneoButton = lazy(() => import('./AgendaTorneo/AgendaTorneoButton'));
const AgregarJugadorButton = lazy(() => import('./AgregarJugadorButton/AgregarJugadorButton'));
const AgregarClubButton = lazy(() => import('./AgregarClubButton/AgregarClubButton'));
const BannerModal = lazy(() => import('./BannerModal/BannerModal'));
const AgendaTorneoModal = lazy(() => import('./AgendaTorneoModal/AgendaTorneoModal'));
const AgregarJugadorModal = lazy(() => import('./AgregarJugadorModal/AgregarJugadorModal'));
const AgregarClubModal = lazy(() => import('./AgregarClubModal/AgregarClubModal'));
const PlayerTable = lazy(() => import('./PlayerTable/PlayerTable'));

const AdminPanel = () => {
  const navigate = useNavigate();
  const [showBannerModal, setShowBannerModal] = useState(false);
  const [showTorneoModal, setShowTorneoModal] = useState(false);
  const [showJugadorModal, setShowJugadorModal] = useState(false);
  const [showClubModal, setShowClubModal] = useState(false);

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

  const handleOpenClubModal = () => setShowClubModal(true);
  const handleCloseClubModal = () => setShowClubModal(false);

  return (
    <div>
      <h1>Admin Panel</h1>
      <div className="admin-panel-buttons">
        <Suspense fallback={<div>Loading CargaBannerButton...</div>}>
          <CargaBannerButton onClick={handleOpenBannerModal} />
        </Suspense>
        <Suspense fallback={<div>Loading AgendaTorneoButton...</div>}>
          <AgendaTorneoButton onClick={handleOpenTorneoModal} />
        </Suspense>
        <Suspense fallback={<div>Loading AgregarJugadorButton...</div>}>
          <AgregarJugadorButton onClick={handleOpenJugadorModal} />
        </Suspense>
        <Suspense fallback={<div>Loading AgregarClubButton...</div>}>
          <AgregarClubButton onClick={handleOpenClubModal} />
        </Suspense>
      </div>
      <Suspense fallback={<div>Loading BannerModal...</div>}>
        {showBannerModal && <BannerModal onClose={handleCloseBannerModal} />}
      </Suspense>
      <Suspense fallback={<div>Loading AgendaTorneoModal...</div>}>
        {showTorneoModal && <AgendaTorneoModal onClose={handleCloseTorneoModal} />}
      </Suspense>
      <Suspense fallback={<div>Loading AgregarJugadorModal...</div>}>
        {showJugadorModal && <AgregarJugadorModal onClose={handleCloseJugadorModal} />}
      </Suspense>
      <Suspense fallback={<div>Loading AgregarClubModal...</div>}>
        {showClubModal && <AgregarClubModal onClose={handleCloseClubModal} />}
      </Suspense>
      <Suspense fallback={<div>Loading PlayerTable...</div>}>
        <PlayerTable />
      </Suspense>
    </div>
  );
};

export default AdminPanel;
