import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Search, X, User, Lock, ChevronLeft, ChevronRight } from 'lucide-react';

// DisposalPointModal component
const DisposalPointModal = ({ point, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-green-1 p-6 rounded-lg max-w-2xl w-full mx-4 border">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{point.nome}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <p className="text-gray-600 mb-4">{point.endereco}</p>
        <h3 className="text-xl font-semibold mb-2">Materiais aceitos:</h3>
        <ul className="list-disc list-inside mb-4">
          {point.materiais.map((material, index) => (
            <li key={index}>{material}</li>
          ))}
        </ul>
        <p className="text-gray-700">{point.descricao}</p>
      </div>
    </div>
  );
};

// LoginModal component
const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-gray-900 rounded-lg max-w-md w-full mx-auto relative">
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-gray-400 hover:text-white"
          aria-label="Close"
        >
          <X size={24} />
        </button>
        <div className="p-6">
          <div className="flex items-center mb-6">
            <img src="/logo-bio-sync-login.png" alt="BIOSYNC Logo" className="h-8 w-8 mr-2" />
            <h2 className="text-2xl font-bold text-white">Login</h2>
          </div>
          <form>
            <div className="mb-4">
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-800 text-white border-gray-700 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="E-mail"
                />
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>
            <div className="mb-4">
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  className="w-full bg-gray-800 text-white border-gray-700 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Senha"
                />
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center text-sm text-gray-300">
                <input type="checkbox" className="mr-2 form-checkbox text-green-500" />
                Lembrar-se
              </label>
              <a href="/" className="text-sm text-green-500 hover:underline">Esqueceu sua senha?</a>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-400">
            Não tem cadastro? <a href="/" className="text-green-500 hover:underline">Registre-se</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default function PontosDeDescarte() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [selectedPoint, setSelectedPoint] = useState(null);

  const [filters, setFilters] = useState({
    cep: '',
    material: '',
    estado: '',
    cidade: '',
    bairro: '',
    periodo: '',
  })

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const pointsPerPage = 5;

  // Wrap pontosDeDescarte in its own useMemo hook
  const pontosDeDescarte = useMemo(() => [
    {
      id: 1,
      nome: 'Panificadora Doce Sonho',
      endereco: 'Av. 7 de Setembro, 451 - Centro - Matão/SP',
      materiais: ['Plástico', 'Papel', 'Vidro'],
      descricao: 'Aceitamos materiais recicláveis em bom estado. Horário de funcionamento: 8h às 18h, de segunda a sábado.',
      estado: 'São Paulo',
      cidade: 'Matão',
      bairro: 'Centro',
      periodo: 'Manhã',
    },
    {
      id: 2,
      nome: 'Mercearia Santa Luz',
      endereco: 'Rua João Pessoa, 192 - Centro - Matão/SP',
      materiais: ['Metal', 'Eletrônicos'],
      descricao: 'Especializada em coleta de metais e eletrônicos. Oferecemos descontos em produtos da loja para quem traz materiais para reciclagem.',
      estado: 'São Paulo',
      cidade: 'Matão',
      bairro: 'Centro',
      periodo: 'Tarde',
    },
    {
      id: 3,
      nome: 'Marmoraria Monte Alto',
      endereco: 'Rua Cesário Motta, 204 - Centro - Matão/SP',
      materiais: ['Vidro', 'Cerâmica'],
      descricao: 'Aceitamos resíduos de construção, especialmente vidros e cerâmicas. Agendamento prévio necessário para grandes volumes.',
      estado: 'São Paulo',
      cidade: 'Matão',
      bairro: 'Centro',
      periodo: 'Integral',
    },
    {
      id: 4,
      nome: 'Eco Recicla Araraquara',
      endereco: 'Av. Bento de Abreu, 1172 - Jardim Primavera - Araraquara/SP',
      materiais: ['Plástico', 'Papel', 'Metal', 'Vidro', 'Eletrônicos'],
      descricao: 'Centro de reciclagem completo, aceitamos diversos tipos de materiais. Oferecemos coleta agendada para grandes volumes.',
      estado: 'São Paulo',
      cidade: 'Araraquara',
      bairro: 'Jardim Primavera',
      periodo: 'Integral',
    },
    {
      id: 5,
      nome: 'Cooperativa Verde Futuro',
      endereco: 'Rua das Acácias, 789 - Vila Nova - São Carlos/SP',
      materiais: ['Plástico', 'Papel', 'Metal'],
      descricao: 'Cooperativa de catadores que realiza coleta seletiva e reciclagem. Aceitamos doações de materiais recicláveis.',
      estado: 'São Paulo',
      cidade: 'São Carlos',
      bairro: 'Vila Nova',
      periodo: 'Manhã',
    },
    {
      id: 6,
      nome: 'Recicla Bem Rio',
      endereco: 'Av. Brasil, 1500 - Bonsucesso - Rio de Janeiro/RJ',
      materiais: ['Plástico', 'Papel', 'Metal', 'Vidro'],
      descricao: 'Ponto de coleta comunitário com foco em educação ambiental. Realizamos oficinas de reciclagem.',
      estado: 'Rio de Janeiro',
      cidade: 'Rio de Janeiro',
      bairro: 'Bonsucesso',
      periodo: 'Tarde',
    },
    {
      id: 7,
      nome: 'EcoVida Belo Horizonte',
      endereco: 'Rua dos Carijós, 150 - Centro - Belo Horizonte/MG',
      materiais: ['Orgânicos', 'Plástico', 'Papel'],
      descricao: 'Especializada em compostagem e reciclagem de materiais orgânicos. Oferecemos workshops de compostagem doméstica.',
      estado: 'Minas Gerais',
      cidade: 'Belo Horizonte',
      bairro: 'Centro',
      periodo: 'Manhã',
    },
    {
      id: 8,
      nome: 'Recicla Nordeste',
      endereco: 'Av. Domingos Ferreira, 2160 - Boa Viagem - Recife/PE',
      materiais: ['Plástico', 'Metal', 'Eletrônicos'],
      descricao: 'Ponto de coleta especializado em resíduos eletrônicos e plásticos. Parcerias com empresas locais para reciclagem responsável.',
      estado: 'Pernambuco',
      cidade: 'Recife',
      bairro: 'Boa Viagem',
      periodo: 'Integral',
    },
    {
      id: 9,
      nome: 'Eco Amazônia',
      endereco: 'Av. Eduardo Ribeiro, 520 - Centro - Manaus/AM',
      materiais: ['Orgânicos', 'Plástico', 'Papel', 'Metal'],
      descricao: 'Cooperativa focada na reciclagem de resíduos da região amazônica. Projetos de conscientização ambiental para comunidades ribeirinhas.',
      estado: 'Amazonas',
      cidade: 'Manaus',
      bairro: 'Centro',
      periodo: 'Manhã',
    },
    {
      id: 10,
      nome: 'Recicla Sul',
      endereco: 'Rua Voluntários da Pátria, 39 - Centro - Porto Alegre/RS',
      materiais: ['Vidro', 'Metal', 'Papel', 'Plástico'],
      descricao: 'Centro de reciclagem com foco em logística reversa. Parcerias com indústrias locais para reaproveitamento de materiais.',
      estado: 'Rio Grande do Sul',
      cidade: 'Porto Alegre',
      bairro: 'Centro',
      periodo: 'Integral',
    },
  ], []);

  const handleFilterChange = useCallback((e) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [e.target.name]: e.target.value
    }));
    setCurrentPage(1);
  }, []);

  const [filteredPontos, setFilteredPontos] = useState(pontosDeDescarte);

  const applyFilters = useCallback(() => {
    const filtered = pontosDeDescarte.filter(ponto => {
      const matchesSearch = ponto.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            ponto.endereco.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesFilters = Object.entries(filters).every(([key, value]) => {
        if (!value) return true;
        if (key === 'material') {
          return ponto.materiais.some(material => material.toLowerCase().includes(value.toLowerCase()));
        }
        return ponto[key].toLowerCase().includes(value.toLowerCase());
      });

      return matchesSearch && matchesFilters;
    });

    setFilteredPontos(filtered);
    setCurrentPage(1);
  }, [filters, searchTerm, pontosDeDescarte]);

  useEffect(() => {
    applyFilters();
  }, [applyFilters]);

  const clearFilters = useCallback(() => {
    setFilters({
      material: '',
      estado: '',
      cidade: '',
      bairro: '',
      periodo: '',
    });
    setSearchTerm('');
    setCurrentPage(1);
  }, []);

  const handleSearch = useCallback((e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  }, []);

  const filterOptions = useMemo(() => ({
    material: [...new Set(pontosDeDescarte.flatMap(p => p.materiais))],
    estado: [...new Set(pontosDeDescarte.map(p => p.estado))],
    cidade: [...new Set(pontosDeDescarte.map(p => p.cidade))],
    bairro: [...new Set(pontosDeDescarte.map(p => p.bairro))],
    periodo: [...new Set(pontosDeDescarte.map(p => p.periodo))],
  }), [pontosDeDescarte]);

  const closeLoginModal = useCallback(() => {
    setIsLoginModalOpen(false);
  }, []);

  // Pagination logic
  const indexOfLastPoint = currentPage * pointsPerPage;
  const indexOfFirstPoint = indexOfLastPoint - pointsPerPage;
  const currentPoints = filteredPontos.slice(indexOfFirstPoint, indexOfLastPoint);
  const totalPages = Math.ceil(filteredPontos.length / pointsPerPage);

  const paginate = useCallback((pageNumber) => setCurrentPage(pageNumber), []);

  return (
    <div className="min-h-screen bg-white-1 font-montserrat">
      <main className="container mx-auto px-4 sm:px-6 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Pontos de Descarte</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3">
            <div className="bg-gray-1 p-4 rounded-lg">
              <h2 className="text-xl  font-semibold mb-4">Filtros</h2>
              <div className="space-y-4">
                {Object.entries(filterOptions).map(([filter, options]) => (
                  <div key={filter}>
                    <label htmlFor={filter} className="block text-sm font-medium text-gray-700 capitalize mb-1">
                      {filter}
                    </label>
                    <div className="relative">
                      <select
                        id={filter}
                        name={filter}
                        value={filters[filter]}
                        onChange={handleFilterChange}
                        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-1 focus:border-green-1 sm:text-sm rounded-md"
                      >
                        <option value="">Selecione</option>
                        {options.map((option, index) => (
                          <option key={index} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex gap-4">
                <button
                  onClick={applyFilters}
                  className="w-full bg-green-1 text-white-1 py-2 px-4 rounded hover:bg-opacity-90 transition duration-300"
                >
                  Filtrar
                </button>
                <button
                  onClick={clearFilters}
                  className="w-full bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-opacity-90 transition duration-300"
                >
                  Limpar
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Buscar pontos de descarte"
                value={searchTerm}
                onChange={handleSearch}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-1"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <div className="space-y-4">
              {currentPoints.map((ponto) => (
                <div 
                  key={ponto.id} 
                  className="bg-white-1 p-4 rounded-lg shadow flex items-center cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setSelectedPoint(ponto)}
                >
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold">{ponto.nome}</h3>
                    <p className="text-gray-600">{ponto.endereco}</p>
                  </div>
                  <div className="w-4 h-4 bg-green-1 rounded-full" aria-label="Ponto ativo"></div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center text-gray-600">
              Exibindo {indexOfFirstPoint + 1}-{Math.min(indexOfLastPoint, filteredPontos.length)} de {filteredPontos.length} resultados
            </div>
            <div className="mt-4 flex justify-center items-center space-x-2">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 rounded-full bg-gray-200 disabled:opacity-50"
                aria-label="Página anterior"
              >
                <ChevronLeft size={20} />
              </button>
              {[...Array(totalPages).keys()].map((number) => (
                <button
                  key={number + 1}
                  onClick={() => paginate(number + 1)}
                  className={`px-3 py-1 rounded-md ${
                    currentPage === number + 1 ? 'bg-green-1 text-white' : 'bg-gray-200'
                  }`}
                >
                  {number + 1}
                </button>
              ))}
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 rounded-full bg-gray-200 disabled:opacity-50"
                aria-label="Próxima página"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </main>

      <DisposalPointModal
        point={selectedPoint}
        isOpen={!!selectedPoint}
        onClose={() => setSelectedPoint(null)}
      />

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={closeLoginModal}
      />
    </div>
  );
}