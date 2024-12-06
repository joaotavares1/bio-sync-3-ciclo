import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration.js";
import Home from "./pages/Home/Home.jsx";
import ButtonsUserRegister from "./pages/Register/ButtonsUserRegister.jsx";
import PontosDeDescarte from "./pages/dropPoints/PontosDeDescarte.jsx";
import LoginModal from "./components/LoginModal.jsx";
import RegistroDeUsuarios from "./pages/Register/UserRegister.jsx";
import CatadorRegister from './pages/Register/CatadorRegister';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Agendamentos from "./pages/Agendamentos/Agendamentos.jsx";
import Conteudos from "./pages/Conteudos/Conteudos.jsx";
import Artigo1 from "./pages/Conteudos/Artigo1.jsx";
import Noticias from "./pages/Noticias/Noticias.jsx";
import VLibras from "./components/VLibras.jsx";

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
          <Route path="/ButtonsUserRegister" element={<ButtonsUserRegister />} />
          <Route path="/dropPoints" element={<PontosDeDescarte />} />
          <Route path="/UserRegister" element={<RegistroDeUsuarios />} />
          <Route path="/CatadorRegister" element={<CatadorRegister />} />
          <Route path="/Agendamentos" element={<Agendamentos />} />
          <Route path="/Conteudos" element={<Conteudos />} />
          <Route path="/Artigo1" element={<Artigo1 />} />
          <Route path="/Noticias" element={<Noticias />} />
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
      </div>
    </Router>
  );
}

function ConditionalHeader({ openLoginModal }) {
  const location = useLocation();
  const showHeaderRoutes = ["/CatadorRegister", "/UserRegister", "/ButtonsUserRegister", "/dropPoints", "/Agendamentos", "/Conteudos", "/Artigo1", "/Noticias"];

  return showHeaderRoutes.includes(location.pathname) ? (
    <Header openLoginModal={openLoginModal} />
  ) : null;
}

function ConditionalFooter() {
  const location = useLocation();
  const showFooterRoutes = ["/CatadorRegister", "/UserRegister", "/ButtonsUserRegister", "/dropPoints", "/Agendamentos", "/Conteudos", "/Artigo1", "/Noticias"];

  return showFooterRoutes.includes(location.pathname) ? <Footer /> : null;
}

export default App;
