// src/views/AdminLogin/AdminLogin.jsx
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../../firebase.config';
import { useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa'; // Importa el ícono de Google
import './AdminLogin.css'; // Importa los estilos CSS

const AdminLogin = () => {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      // Obtén la información del usuario autenticado
      const user = result.user;
      console.log('User Info:', user);

      // Redirige al panel de administración
      navigate('/admin');
    } catch (error) {
      console.error('Error al iniciar sesión:', error.message);
    }
  };

  return (
    <div className="admin-login-container">
      <h1 className="admin-login-title">Admin Login</h1>
      <button className="admin-login-button" onClick={handleLogin}>
        <FaGoogle className="admin-google-icon" />
        <span>Login with Google</span>
      </button>
    </div>
  );
};

export default AdminLogin;
