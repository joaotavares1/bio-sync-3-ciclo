import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Menu, LogOut } from 'lucide-react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

export default function Header({ openLoginModal }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const logo = '/logo-bio-sync-login.png';
  const userlogin = '/user.png';
  const auth = getAuth();

  const handleUserStateChange = useCallback((currentUser) => {
    setUser(currentUser);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, handleUserStateChange);
    return () => unsubscribe();
  }, [auth, handleUserStateChange]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <header className="bg-back-header bg-center bg-cover">
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center h-16 w-14 rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <img src={logo} alt="Logo" className="sm:h-16 sm:w-16" />
          </Link>
          <div className="hidden sm:flex space-x-4 lg:space-x-8">
            <Link to="/" className="text-white-1 hover:text-white-1 hover:font-bold">Home</Link>
            <Link to="/dropPoints" className="text-white-1 hover:text-white-1 hover:font-bold">Pontos de Descarte</Link>
            <Link to="/Agendamentos" className="text-white-1 hover:text-white-1 hover:font-bold">Agendamento</Link>
          </div>
          <div className="hidden sm:flex items-center">
            {user ? (
              // Logged-in state
              <div className="flex items-center">
                <img src={user.photoURL || userlogin} alt="User Avatar" className="h-8 w-8 rounded-full mr-2" />
                <div>
                  <p className="text-white-1 font-bold">{user.displayName || user.email}</p>
                  <Link to="/profile" className="text-white-1 text-sm hover:underline">
                    Atualizar dados pessoais
                  </Link>
                </div>
                <button
                  onClick={handleLogout}
                  className="ml-4 text-white-1 hover:text-red-500 transition-colors duration-300"
                  aria-label="Logout"
                >
                  <LogOut size={20} />
                </button>
              </div>
            ) : (
              // Logged-out state (original code)
              <div className="flex items-center">
                <img src={userlogin} alt="userlogin" className="h-8 w-8 mr-2" />
                <div>
                  <p className="text-white-1">
                    Faça
                    <button onClick={openLoginModal} className="ml-2 px-2 font-bold text-white-1 rounded transition-transform transform hover:scale-105 cursor-pointer">Login</button> ou
                  </p>
                  <Link to="/ButtonsUserRegister" className="font-bold text-white-1">
                    <p className="rounded transition-transform transform hover:scale-105 cursor-pointer">
                      Cadastre-se
                    </p>
                  </Link>
                </div>
              </div>
            )}
          </div>
          <button 
            className="sm:hidden text-white-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
        {isMenuOpen && (
          <div className="mt-4 sm:hidden">
            <Link to="/" className="block text-white-1 py-2">Home</Link>
            <Link to="/dropPoints" className="block text-white-1 py-2">Pontos de Descarte</Link>
            <Link to="/Agendamentos" className="block text-white-1 py-2">Agendamento</Link>
            {user ? (
              // Logged-in state for mobile menu
              <>
                <p className="text-white-1 py-2 font-bold">{user.displayName || user.email}</p>
                <Link to="/profile" className="block text-white-1 py-2">Atualizar dados pessoais</Link>
                <button onClick={handleLogout} className="block text-white-1 py-2 font-bold">Logout</button>
              </>
            ) : (
              // Logged-out state for mobile menu (original code)
              <>
                <button onClick={openLoginModal} className="block text-white-1 py-2 font-bold">Login</button>
                <Link to="/ButtonsUserRegister" className="block text-white-1 py-2 font-bold">Cadastre-se</Link>
              </>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}