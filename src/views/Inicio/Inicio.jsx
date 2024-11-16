import Header from '../../components/header/Header';
import BannerP from './BannerP/BannerP';
import CardsTorneos from './CardsTorneos/CardsTorneos';
import GenerosJugadores from './GenerosJugadores/GenerosJugadores';
import LogosDeCanchas from './LogosDeCanchas/LogosDeCanchas';
import RankingSlide from './Ranking/Ranking';
import SliderPublicidad from './SliderPublicidad/SliderPublicidad';
import WhatsAppButton from './WhatsAppButton/WhatsAppButton';
import PopupInicio from './PopupInicio/PopupInicio';

const Inicio = () => {
  return (
    <div>
      <PopupInicio /> 
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
