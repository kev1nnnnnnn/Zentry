import type { APIRoute } from "astro";
import { put } from "@vercel/blob";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    // validação do arquivo
    if (!(file instanceof File)) {
      return new Response(
        JSON.stringify({ error: "Arquivo inválido" }),
        { status: 400 }
      );
    }

    // validação de imagem
    if (!file.type.startsWith("image/")) {
      return new Response(
        JSON.stringify({ error: "Somente imagens são permitidas" }),
        { status: 400 }
      );
    }

    // nome único
    const fileName = `${Date.now()}-${file.name.replace(/\s+/g, "-")}`;

    // upload para Vercel Blob
    const blob = await put(`blog/${fileName}`, file, {
      access: "public",
    });

    return new Response(
      JSON.stringify({
        success: true,
        url: blob.url,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

  } catch (error) {
    console.error("Upload error:", error);

    return new Response(
      JSON.stringify({
        error: "Erro ao fazer upload",
      }),
      { status: 500 }
    );
  }
};