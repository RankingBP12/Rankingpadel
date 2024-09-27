// src/components/AdminPanel.js
import React, { Suspense, lazy, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase.config';
import WhatsAppButton from '../../views/Inicio/WhatsAppButton/WhatsAppButton'; 
import WhatsAppSettings from './WhatsAppSettings/WhatsAppSettings'; // Importar el nuevo componente
import './AdminPanel.css';
import AgregarReglamentoButton from './AgregarReglamentButton/AgregarReglamentoButton';
import ReglamentoModal from './ReglamentoModal/ReglamentoModal';

// Cargar los otros componentes de manera lazy
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
  const [showReglamentoModal, setShowReglamentoModal] = useState(false);
  const [whatsAppNumber, setWhatsAppNumber] = useState('1234567890');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (!user) {
        navigate('/admin-login');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <div>
      <h1>Admin Panel</h1>

      <WhatsAppButton phoneNumber={whatsAppNumber} />
     

      <div className="admin-panel-buttons">
        <Suspense fallback={<div>Loading CargaBannerButton...</div>}>
          <CargaBannerButton onClick={() => setShowBannerModal(true)} />
        </Suspense>
        <Suspense fallback={<div>Loading AgendaTorneoButton...</div>}>
          <AgendaTorneoButton onClick={() => setShowTorneoModal(true)} />
        </Suspense>
        <Suspense fallback={<div>Loading AgregarJugadorButton...</div>}>
          <AgregarJugadorButton onClick={() => setShowJugadorModal(true)} />
        </Suspense>
        <Suspense fallback={<div>Loading AgregarClubButton...</div>}>
          <AgregarClubButton onClick={() => setShowClubModal(true)} />
        </Suspense>
        <Suspense fallback={<div>Loading AgregarReglamentoButton...</div>}>
          <AgregarReglamentoButton onClick={() => setShowReglamentoModal(true)} />
        </Suspense>
      </div>
      <WhatsAppSettings currentWhatsAppNumber={whatsAppNumber} />

      <Suspense fallback={<div>Loading BannerModal...</div>}>
        {showBannerModal && <BannerModal onClose={() => setShowBannerModal(false)} />}
      </Suspense>
      <Suspense fallback={<div>Loading AgendaTorneoModal...</div>}>
        {showTorneoModal && <AgendaTorneoModal onClose={() => setShowTorneoModal(false)} />}
      </Suspense>
      <Suspense fallback={<div>Loading AgregarJugadorModal...</div>}>
        {showJugadorModal && <AgregarJugadorModal onClose={() => setShowJugadorModal(false)} />}
      </Suspense>
      <Suspense fallback={<div>Loading AgregarClubModal...</div>}>
        {showClubModal && <AgregarClubModal onClose={() => setShowClubModal(false)} />}
      </Suspense>
      <Suspense fallback={<div>Loading ReglamentoModal...</div>}>
        {showReglamentoModal && <ReglamentoModal onClose={() => setShowReglamentoModal(false)} />}
      </Suspense>
      <Suspense fallback={<div>Loading PlayerTable...</div>}>
        <PlayerTable />
      </Suspense>
    </div>
  );
};

export default AdminPanel;
