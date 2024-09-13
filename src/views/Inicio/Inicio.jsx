import Header from "../../components/header/Header"
import BannerP from "./BannerP/BannerP"
import CardsTorneos from "./CardsTorneos/CardsTorneos"
import GenerosJugadores from "./GenerosJugadores/GenerosJugadores"
import LogosDeCanchas from "./LogosDeCanchas/LogosDeCanchas"
import RankingSlide from "./Ranking/Ranking"


const Inicio = () => {
  return (
    <div>
        <Header/>
        <BannerP/>
        <LogosDeCanchas/>
        <CardsTorneos/>
        <GenerosJugadores/>
        <div className="rankings-container">
      <div className="ranking-container">
        <RankingSlide/>
      </div>
    </div>
    </div>
  )
}

export default Inicio