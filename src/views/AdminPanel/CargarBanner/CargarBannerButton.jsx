import PropTypes from 'prop-types'; // Importa PropTypes
import './CargarBannerButton.css';

const CargaBannerButton = ({ onClick }) => {
  return (
    <div className="carga-banner-card" onClick={onClick}>
      <h1 className="carga-banner-text">Publicidad</h1>
    </div>
  );
};

// Define los tipos de las props
CargaBannerButton.propTypes = {
  onClick: PropTypes.func.isRequired, // onClick debe ser una función
};

export default CargaBannerButton;
