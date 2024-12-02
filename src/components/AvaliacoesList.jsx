import React, { useEffect, useState } from "react";
import { obterAvaliacoes } from "../services/avaliacaoService";

export default function AvaliacoesList({ catadorId }) {
  const [avaliacoes, setAvaliacoes] = useState([]);

  useEffect(() => {
    async function fetchAvaliacoes() {
      const data = await obterAvaliacoes(catadorId);
      setAvaliacoes(data);
    }
    fetchAvaliacoes();
  }, [catadorId]);

  return (
    <div>
      <h3>Avaliações</h3>
      {avaliacoes.length > 0 ? (
        <ul>
          {avaliacoes.map((avaliacao, index) => (
            <li key={index}>
              <strong>Nota:</strong> {avaliacao.nota} <br />
              <strong>Comentário:</strong> {avaliacao.comentario || "Sem comentário"} <br />
              <strong>Data:</strong> {new Date(avaliacao.data.seconds * 1000).toLocaleDateString()}
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhuma avaliação encontrada.</p>
      )}
    </div>
  );
}