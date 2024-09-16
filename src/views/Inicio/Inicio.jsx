import Header from '../../components/header/Header';
import BannerP from './BannerP/BannerP';
import CardsTorneos from './CardsTorneos/CardsTorneos';
import GenerosJugadores from './GenerosJugadores/GenerosJugadores';
import LogosDeCanchas from './LogosDeCanchas/LogosDeCanchas';
import RankingSlide from './Ranking/Ranking';

const Inicio = () => {
  return (
    <div>
      <Header />
      <BannerP />
      <section id='canchas'>
      <LogosDeCanchas />
      </section>
      <section id ='torneos'>
      <CardsTorneos />
      </section>
      <section id= 'jugadores'>
      <GenerosJugadores />
      </section>
      <div className="rankings-container">
        <div className="ranking-container">
          <section id = 'ranking'>
          <RankingSlide />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
