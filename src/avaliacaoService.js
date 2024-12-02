import { doc, setDoc, updateDoc, arrayUnion, getDoc, Timestamp } from "firebase/firestore";
import { db } from "../src/firebase/firebase"; // Ajuste o caminho se necessário

// Função para adicionar avaliação
export async function adicionarAvaliacao(catadorId, doadorId, nota, comentario) {
  try {
    const avaliacaoRef = doc(db, "avaliacoes", catadorId);

    await setDoc(
      avaliacaoRef,
      {
        avaliacoes: arrayUnion({
          doadorId,
          nota,
          comentario,
          data: Timestamp.now(),
        }),
      },
      { merge: true }
    );

    console.log("Avaliação enviada!");
  } catch (error) {
    console.error("Erro ao adicionar avaliação: ", error);
  }
}

// Função para obter avaliações
export async function obterAvaliacoes(catadorId) {
  try {
    const avaliacaoRef = doc(db, "avaliacoes", catadorId);
    const avaliacaoSnap = await getDoc(avaliacaoRef);

    if (avaliacaoSnap.exists()) {
      return avaliacaoSnap.data().avaliacoes;
    } else {
      console.log("Nenhuma avaliação encontrada.");
      return [];
    }
  } catch (error) {
    console.error("Erro ao obter avaliações: ", error);
    return [];
  }
}