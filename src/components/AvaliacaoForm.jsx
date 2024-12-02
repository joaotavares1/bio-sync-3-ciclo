import React, { useState } from "react";
import { adicionarAvaliacao } from "../services/avaliacaoService";

export default function AvaliacaoForm({ catadorId }) {
  const [nota, setNota] = useState(0);
  const [comentario, setComentario] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const doadorId = "exemplo-doador-id"; // Substitua pelo ID do usuário logado
    await adicionarAvaliacao(catadorId, doadorId, nota, comentario);
    alert("Avaliação enviada!");
    setNota(0);
    setComentario("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Deixe sua Avaliação</h3>
      <label>
        Nota:
        <select value={nota} onChange={(e) => setNota(Number(e.target.value))}>
          <option value={0}>Selecione</option>
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Comentário:
        <textarea
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
        />
      </label>
      <br />
      <button type="submit" disabled={nota === 0}>Enviar Avaliação</button>
    </form>
  );
}