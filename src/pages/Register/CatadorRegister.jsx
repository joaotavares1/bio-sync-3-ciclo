import React, { useState } from 'react';
import { db, auth, createUserWithEmailAndPassword } from '../../config/firebase';
import { collection, addDoc } from 'firebase/firestore';

export default function CatadorRegister() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [workArea, setWorkArea] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Função para registrar o catador no Firestore e criar um usuário no Firebase Auth
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Criação do usuário com o email e senha usando Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Adicionando dados do catador no Firestore
      await addDoc(collection(db, 'catadores'), {
        name,
        email,
        phone,
        address,
        workArea,
        userId: user.uid, // Salvando o ID do usuário
      });

      alert('Cadastro realizado com sucesso!');
    } catch (error) {
      setError('Erro ao cadastrar. Tente novamente.');
      console.error("Erro ao cadastrar:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-4">Cadastro do Catador</h1>
      <p className="text-center mb-8">Preencha os dados abaixo para se cadastrar como catador.</p>

      {error && <p className="text-red-500 text-center">{error}</p>}

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        {/* Nome */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-medium mb-2">Nome Completo</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>

        {/* Senha */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-lg font-medium mb-2">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>

        {/* Telefone */}
        <div className="mb-4">
          <label htmlFor="phone" className="block text-lg font-medium mb-2">Telefone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>

        {/* Endereço */}
        <div className="mb-4">
          <label htmlFor="address" className="block text-lg font-medium mb-2">Endereço</label>
          <input
            type="text"
            id="address"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>

        {/* Área de Trabalho */}
        <div className="mb-4">
          <label htmlFor="workArea" className="block text-lg font-medium mb-2">Área de Trabalho</label>
          <input
            type="text"
            id="workArea"
            name="workArea"
            value={workArea}
            onChange={(e) => setWorkArea(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>

        {/* Botão de envio */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-400 transition duration-300"
        >
          {loading ? 'Cadastrando...' : 'Cadastrar'}
        </button>
      </form>
    </div>
  );
}
