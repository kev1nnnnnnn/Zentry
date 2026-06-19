import type { APIRoute } from "astro";
import { db } from "../../lib/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

export const prerender = false;

const postsRef = collection(db, "posts");

/* =========================
   CREATE POST
========================= */
export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();

    const titulo = body.titulo;
    const imagem = body.imagem;
    const conteudo = body.conteudo;

    // validação mínima (profissional)
    if (!titulo || !conteudo) {
      return new Response(
        JSON.stringify({
          error: "Título e conteúdo são obrigatórios",
        }),
        { status: 400 }
      );
    }

    const docRef = await addDoc(postsRef, {
      titulo,
      conteudo,
      imagem: imagem || "",
      criado_em: new Date(),
    });

    return new Response(
      JSON.stringify({
        success: true,
        id: docRef.id,
      }),
      {
        status: 201,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

  } catch (error) {
    console.error(error);

    return new Response(
      JSON.stringify({
        error: "Erro ao criar post",
      }),
      { status: 500 }
    );
  }
};

/* =========================
   LIST POSTS
========================= */
export const GET: APIRoute = async () => {
  try {
    const snapshot = await getDocs(postsRef);

    const posts = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return new Response(JSON.stringify(posts), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });

  } catch (error) {
    console.error(error);

    return new Response(
      JSON.stringify({
        error: "Erro ao listar posts",
      }),
      { status: 500 }
    );
  }
};