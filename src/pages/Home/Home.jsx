import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { ChevronLeft, ChevronRight } from 'lucide-react';


const causes = [
  { name: 'IBAMA', logo: '/ibamacausa.png', url: '' },
  { name: 'Ecobarreira', logo: '/ecobarreira.png', url: '' },
  { name: 'SOS Amazônia', logo: '/SOS-Amazonia-logo.png', url: '' },
];

function EnvironmentalCausesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % causes.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + causes.length) % causes.length);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold mt-8 sm:mt-12 mb-4 sm:mb-6 text-center">Apoie causas ambientais</h2>
      <div className="relative flex items-center justify-center">
        <button
          onClick={prevSlide}
          className="absolute left-0 bg-green-1 text-white-1 p-2 rounded-full focus:outline-none"
          aria-label="Previous cause"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="flex gap-4 sm:gap-8 lg:gap-24 justify-center">
          {causes.map((cause, index) => (
            <div 
              key={index} 
              className={`bg-white-1 p-4 rounded-lg shadow transition-transform transform hover:scale-105 cursor-pointer ${
                index === currentIndex ? 'block' : 'hidden sm:block'
              }`}
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto mb-4 flex items-center justify-center">
                <img src={cause.logo} alt={cause.name} className="max-w-full max-h-full" />
              </div>
              <p className="text-center text-black-1">{cause.name}</p>
            </div>
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="absolute right-0 bg-green-1 text-white-1 p-2 rounded-full focus:outline-none"
          aria-label="Next cause"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      <div className="mt-4 sm:mt-8 bg-gray-1 h-2 rounded-full overflow-hidden">
        <div
          className="bg-green-1 h-full transition-all duration-300 ease-in-out"
          style={{ width: `${((currentIndex + 1) / causes.length) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}

export default function Home() {
  const cardconscientizacao = '/Cerebro.png';
  const cardpontodescarte = '/PontoDescarte.png';
  const cardagendamento = '/Agendamento.png';
  const logoinstagram = '/insta-preto.png';
  const logotiktok = '/tiktok--preto.png';
  const logoyoutube = '/youtube_black.png';
  const cardnoticias = '/cardConteudo.jpg';
  const cardconteudos = '/cardNoticias.jpg';
 

  return (
    <div className="min-h-screen bg-white-1 font-montserrat">
      <main className="container mx-auto px-4 sm:px-6 py-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center mt-8 sm:mt-12">Quem Somos?</h1>
        <p className="text-left mx-auto max-w-2xl text-lg sm:text-xl">
          O objetivo da BIOSYNC é estabelecer um ambiente virtual que
          possibilite a conexão e conscientização de pessoas em prol de
          tornar o futuro mais limpo e sustentável, gerando emprego,
          visibilidade e oportunidade para pequenos coletores,
          além disso, disponibilizar informações de maneira prática para os cidadãos.
        </p>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-16 my-8 sm:my-12 lg:my-24">
          <div className="bg-white-1 rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer">
            <HashLink to={'/#Conscientização'}>
            <img src={cardconscientizacao} alt="card conscientizacao" className="h-24 w-24 sm:h-32 sm:w-32 lg:h-40 lg:w-40" />
            </HashLink>
          </div>
          <div className="bg-white-1 rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer">
            <Link to={'/dropPoints'}>
            <img src={cardpontodescarte} alt="card pontodescarte" className="h-24 w-24 sm:h-32 sm:w-32 lg:h-40 lg:w-40" />
            </Link>
          </div>
          <div className="bg-white-1 rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer">
            <Link to={'/Agendamentos'}>
            <img src={cardagendamento} alt="card agendamento" className="h-24 w-24 sm:h-32 sm:w-32 lg:h-40 lg:w-40" />
            </Link>
          </div>
        </div>
        
        <div className="bg-white-1 py-6 sm:py-8">
          <div className="bg-green-1 h-2 w-4/5 mx-auto"></div>
           <div className="py-4 sm:py-6 px-4 sm:px-6 text-left mx-auto max-w-2xl text-lg sm:text-xl italic">
              <p>
                "A sustentabilidade cria e mantém as condições sob
                as quais os humanos e a natureza podem existir em
                equilíbrio, que permite a prosperidade a longo prazo."
              </p>
            <p className='p-2 sm:p-4'> 
                Dr. Karl-Henrik Robèrt
            </p>
          </div>
          <div className="bg-green-1 h-2 w-4/5 mx-auto"></div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold mt-8 sm:mt-12 mb-4 sm:mb-6 text-center">Redes Sociais</h2>
        <div className="flex space-x-8 justify-center p-4 sm:p-8">
          <a href="/" className="bg-white-1 rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer">
            <img src={logoinstagram} alt="Instagram" className="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24" />
          </a>
          <a href="/" className="bg-white-1 rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer">
            <img src={logotiktok} alt="TikTok" className="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24" />
          </a>
          <a href="/" className="bg-white-1 rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer">
            <img src={logoyoutube} alt="YouTube" className="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24" />
          </a>
        </div>

        <div id="Conscientização" className="bg-back-ambiente-conscientizacao bg-center bg-cover p-4 sm:p-8 text-white-1 box-border mt-8 sm:mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-left mb-6 sm:mb-8" >Ambiente de Conscientização</h2>
          <div className="flex flex-col sm:flex-row justify-center sm:space-x-8 lg:space-x-24 space-y-6 sm:space-y-0">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Conteúdos</h3>
              <div className="relative w-48 h-64 sm:w-56 sm:h-72 lg:w-64 lg:h-80 mx-auto overflow-hidden rounded-lg border-4 border-white-1 transition-colors duration-300 hover:border-green-1 cursor-pointer">
                <Link to={'/Conteudos'}>
                <img
                  src={cardconteudos}
                  alt="Conteúdos"
                  className="object-cover w-full h-full"
                />
                </Link>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Notícias</h3>
              <div className="relative w-48 h-64 sm:w-56 sm:h-72 lg:w-64 lg:h-80 mx-auto overflow-hidden rounded-lg border-4 border-white-1 transition-colors duration-300 hover:border-green-1 cursor-pointer">
                <Link to={'/Noticias'}>
                <img
                  src={cardnoticias}
                  alt="Notícias"
                  className="object-cover w-full h-full"
                />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <EnvironmentalCausesCarousel />

      </main>

    </div>
  );
}