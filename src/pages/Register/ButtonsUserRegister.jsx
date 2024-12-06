import React from "react";
import { Link } from "react-router-dom";


// Corrigido para exportar como default
export default function ButtonsUserRegister() {
  const imgCatador = '/undraw_catador_example.svg';
  const imgDescartando = '/undraw_discarding_example.svg';

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-6">Tela do Catador</h1>
      <p className="text-center text-lg mb-8">
        Bem-vindo à página de cadastro do catador! Escolha uma das opções abaixo para se cadastrar.
      </p>

      {/* Seção de cadastro do Catador */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold mb-4 text-center">Cadastrar como Catador</h2>
          <p className="mb-4 text-center">Faça o cadastro para começar a realizar a coleta de materiais recicláveis.</p>
          <Link
            to="/UserRegister"
            className="flex items-center rounded-lg overflow-hidden transition-transform transform hover:scale-105 mb-4"
          >
            <img src={imgCatador} alt="Cadastro Catador" className="mx-auto" />
          </Link>
          <Link
            to="/UserRegister"
            className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-400 transition duration-300 text-center"
          >
            Cadastrar-se como Catador
          </Link>
        </div>
        </div>

        {/* Seção de cadastro de Ponto de Descarte */}
        <div className="grid md:grid-cols-2 gap-8"></div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold mb-4 text-center">Cadastrar Ponto de Descarte</h2>
          <p className="mb-4 text-center">Cadastre o ponto de descarte de materiais recicláveis, como sua residência ou comércio.</p>
          <Link to="/CatadorRegister" className="flex items-center rounded-lg overflow-hidden transition-transform transform hover:scale-105 mb-4">
            <img src={imgDescartando} alt="Cadastro Ponto de Descarte" className="mx-auto" />
          </Link>
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400 transition duration-300 text-center"
          
            Cadastrar Ponto de Descarte
          
        
      </div>
    </div>
  );
}
