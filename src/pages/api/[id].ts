import type { APIRoute } from "astro";
import { db } from "../../lib/firebase";

import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";

/* =========================
   GET BY ID
========================= */
export const GET: APIRoute = async ({ params }) => {
  try {
    const { id } = params;

    const ref = doc(db, "posts", id as string);
    const snapshot = await getDoc(ref);

    if (!snapshot.exists()) {
      return new Response(
        JSON.stringify({ error: "Post não encontrado" }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({
        id: snapshot.id,
        ...snapshot.data(),
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({
        error: "Erro ao buscar post",
        details: String(err),
      }),
      { status: 500 }
    );
  }
};

/* =========================
   UPDATE (PUT)
========================= */
export const PUT: APIRoute = async ({ params, request }) => {
  try {
    const { id } = params;
    const body = await request.json();

    const ref = doc(db, "posts", id as string);

    await updateDoc(ref, {
      titulo: body.titulo,
      slug: body.slug,
      imagem: body.imagem,
      descricao: body.descricao,
      conteudo: body.conteudo,
    });

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({
        error: "Erro ao atualizar post",
        details: String(err),
      }),
      { status: 500 }
    );
  }
};

/* =========================
   DELETE
========================= */
export const DELETE: APIRoute = async ({ params }) => {
  try {
    const { id } = params;

    const ref = doc(db, "posts", id as string);

    await deleteDoc(ref);

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({
        error: "Erro ao deletar post",
        details: String(err),
      }),
      { status: 500 }
    );
  }
};