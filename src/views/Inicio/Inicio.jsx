import React, { Suspense, lazy } from 'react';
import Header from '../../components/header/Header';
import BannerP from './BannerP/BannerP';
import CardsTorneos from './CardsTorneos/CardsTorneos';
import GenerosJugadores from './GenerosJugadores/GenerosJugadores';
import LogosDeCanchas from './LogosDeCanchas/LogosDeCanchas';
import RankingSlide from './Ranking/Ranking';
import SliderPublicidad from './SliderPublicidad/SliderPublicidad';
import WhatsAppButton from './WhatsAppButton/WhatsAppButton';

// Lazy load del PopupInicio
const PopupInicio = lazy(() => import('./PopupInicio/PopupInicio'));

const Inicio = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading popup...</div>}>
        <PopupInicio />
      </Suspense>
      <Header />
      <BannerP />
      <section id='canchas'>
        <LogosDeCanchas />
      </section>
      <section id='torneos'>
        <CardsTorneos />
      </section>
      <section>
        <SliderPublicidad />
      </section>
      <section id='jugadores'>
        <GenerosJugadores />
      </section>
      <div className="rankings-container">
        <div className="ranking-container">
          <section id='ranking'>
            <RankingSlide />
          </section>
        </div>
        <section>
          <SliderPublicidad />
        </section>
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default Inicio;

