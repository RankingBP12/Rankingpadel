// src/components/AppRouter.jsx
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from '../views/Inicio/Inicio';
import AdminLogin from '../views/AdminLogin/AdminLogin';
import AdminPanel from '../views/AdminPanel/AdminPanel';
import Header from '../components/header/Header';
import { AppProvider } from '../Context/AppContext'; // Importa el AppProvider

const AppRouter = () => {
  return (
    <AppProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default AppRouter;
