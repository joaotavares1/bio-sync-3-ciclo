import React, { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { Dialog } from '@headlessui/react';
import { getApp } from 'firebase/app';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';
import { FcGoogle } from 'react-icons/fc';

export default function LoginModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isAppCheckReady, setIsAppCheckReady] = useState(false);

  useEffect(() => {
    if (!window.appCheckInitialized) {
      const app = getApp();
      console.log('Inicializando AppCheck...');
      initializeAppCheck(app, {
        provider: new ReCaptchaV3Provider('B8291FB9-05ED-45E1-ABCB-6BE9D3EE0317'),
        isTokenAutoRefreshEnabled: true,
      });
      console.log('AppCheck inicializado com sucesso.');
      setIsAppCheckReady(true);
      window.appCheckInitialized = true;
    } else {
      console.log('AppCheck já inicializado.');
      setIsAppCheckReady(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Login realizado com sucesso.');
      onClose();
    } catch (error) {
      console.error('Erro ao fazer login:', error.message);
      setError('Falha no login: ' + error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      console.log('Login com Google realizado com sucesso.');
      onClose();
    } catch (error) {
      if (error.code === 'auth/popup-closed-by-user') {
        console.warn('O usuário fechou o popup antes de concluir o login.');
        setError('O popup foi fechado antes de concluir o login. Por favor, tente novamente.');
      } else {
        console.error('Erro ao fazer login com Google:', error.message);
        setError('Falha no login com Google: ' + error.message);
      }
    }
  };

  const cadeadoIcon = '/cadeado_aberto.png';
  const XIcon = '/botao-apagar.png';
  const avatarIcon = '/avatar.png';
  const logo = '/logo-bio-sync-login.png';

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <Dialog.Panel className="fixed inset-0 flex items-center justify-center mt-24">
        <div className="bg-black-1 p-8 rounded-xl opacity-95 shadow-lg max-w-sm w-full text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-red-500 hover:fill-white-1 transition-colors"
            aria-label="Fechar"
          >
            <img src={XIcon} className="h-5 w-5" alt="IconeX" />
          </button>
          <div className="flex items-center justify-start space-x-20">
            <img src={logo} className="object-scale-down h-20 w-10" alt="Logo" />
            <Dialog.Title className="text-white-1 text-2xl font-bold">Login</Dialog.Title>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="mb-4">
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="placeholder-white-1 bg-opacity-10 placeholder-opacity-200 mt-1 block w-full bg-gray-1 border border-gray-600 rounded-md p-2 pl-2 focus:outline-none focus:ring focus:ring-green-1 text-white-1"
                  required
                  placeholder="E-mail"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white-1">
                  <img src={avatarIcon} className="h-6 w-6" alt="Avatar" />
                </span>
              </div>
            </div>
            <div className="mb-4">
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="placeholder-white-1 bg-opacity-10 placeholder-opacity-200 mt-1 block w-full bg-gray-1 border border-gray-600 rounded-md p-2 pl-2 focus:outline-none focus:ring focus:ring-green-1 text-white-1"
                  required
                  placeholder="Senha"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <img src={cadeadoIcon} className="h-6 w-6" alt="Cadeado" />
                </span>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-green-1 hover:text-white-1 font-bold py-2 rounded-md transition"
              disabled={!isAppCheckReady}
            >
              {isAppCheckReady ? 'Login' : 'Carregando reCAPTCHA...'}
            </button>
            {error && <p className="text-red-1 mt-2">{error}</p>}
          </form>
          <div className="mt-4">
            <button
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center bg-white-1 text-black-1 font-bold py-2 rounded-md transition hover:bg-gray-1"
            >
              <FcGoogle className="h-5 w-5 mr-2" />
              Login com Google
            </button>
          </div>
          <div className="flex justify-center text-sm mt-4">
            <p className="text-white-1 mr-2">Não tem cadastro?</p>
            <a href="/" className="text-white-1 hover:text-green-1">
              Registre-se
            </a>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}
