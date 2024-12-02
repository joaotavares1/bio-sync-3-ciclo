import React from "react";
import { useParams } from "react-router-dom";
import AvaliacaoForm from "../components/AvaliacaoForm";
import AvaliacoesList from "../components/AvaliacoesList";

export default function AvaliacoesPage() {
  const { catadorId } = useParams(); // Obtém o ID do catador a partir da URL

  return (
    <div>
      <h1>Avaliações do Catador</h1>
      <p>Catador ID: {catadorId}</p>
      <AvaliacaoForm catadorId={catadorId} />
      <AvaliacoesList catadorId={catadorId} />
    </div>
  );
}