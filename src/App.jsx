import React, { useState} from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import ButtonsUserRegister from './pages/Register/ButtonsUserRegister.jsx';
import PontosDeDescarte from './pages/dropPoints/PontosDeDescarte.jsx';
import LoginModal from './components/LoginModal.jsx';
import RegistroDeUsuarios from './pages/Register/UserRegister.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Agendamentos from './pages/Agendamentos/Agendamentos.jsx';
import Conteudos from './pages/Conteudos/Conteudos.jsx';
import Artigo1 from './pages/Conteudos/Artigo1.jsx';
import Noticias from './pages/Noticias/Noticias.jsx';
import VLibras from './components/VLibras.jsx';
import { ConnectionStatus } from './components/ConnectionStatus.jsx';
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import AvaliacoesPage from './pages/AvaliacoesPage';

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);

  useEffect(() => {
    serviceWorkerRegistration.register({
      onUpdate: (registration) => {
        setShowUpdate(true);
        window.swUpdate = registration.waiting;
      },
    });
  }, []);

  const reloadPage = () => {
    if (window.swUpdate) {
      window.swUpdate.postMessage({ type: "SKIP_WAITING" });
      window.swUpdate.addEventListener("statechange", (event) => {
        if (event.target.state === "activated") {
          window.location.reload();
        }
      });
    }
  };
  
  return (
    <Router>
      <div className="App">
        <ConditionalHeader openLoginModal={() => setIsLoginModalOpen(true)} />
        <Routes>
          <Route path="/" element={<Home openLoginModal={() => setIsLoginModalOpen(true)} />} />
          <Route path="/buttonsUserRegister" element={<ButtonsUserRegister openLoginModal={() => setIsLoginModalOpen(true)} />} />
          <Route path="/dropPoints" element={<PontosDeDescarte openLoginModal={() => setIsLoginModalOpen(true)} />} />
          <Route path="/UserRegister" element={<RegistroDeUsuarios openLoginModal={() => setIsLoginModalOpen(true)} />} />
          <Route path="/Agendamentos" element={<Agendamentos openLoginModal={() => setIsLoginModalOpen(true)} />} />
          <Route path="/Conteudos" element={<Conteudos openLoginModal={() => setIsLoginModalOpen(true)} />} />
          <Route path="/Artigo1" element={<Artigo1 openLoginModal={() => setIsLoginModalOpen(true)} />} />
          <Route path="/Noticias" element={<Noticias openLoginModal={() => setIsLoginModalOpen(true)} />} />
          <Route path="/avaliacoes/:catadorId" element={<AvaliacoesPage />} />
        </Routes>
        {showUpdate && (
          <div className="update-notification">
            <p>Nova versão disponível!</p>
            <button onClick={reloadPage}>Atualizar</button>
          </div>
        )}
        <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
        <ConditionalFooter />
        <VLibras />
        <ConnectionStatus /> 
      </div>
    </Router>
  );
}

function ConditionalHeader({ openLoginModal }) {
  const location = useLocation();
  const showHeaderRoutes = ['/', '/UserRegister', '/buttonsUserRegister', '/dropPoints', '/Agendamentos', '/Conteudos', '/Artigo1', '/Noticias'];

  return showHeaderRoutes.includes(location.pathname) ? (
    <Header openLoginModal={openLoginModal} />
  ) : null;
}

function ConditionalFooter() {
  const location = useLocation();
  const showFooterRoutes = ['/', '/UserRegister', '/buttonsUserRegister', '/dropPoints', '/Agendamentos', '/Conteudos', '/Artigo1', '/Noticias'];

  return showFooterRoutes.includes(location.pathname) ? (
    <Footer />
  ) : null;
}

export default App;
