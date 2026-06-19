import {
  collection,
  addDoc,
  getDocs,
  query,
  where
} from "firebase/firestore";

import { db } from "../lib/firebase";

const postsCollection = collection(db, "posts");

export interface Post {
  titulo: string;
  slug: string;
  descricao: string;
  conteudo: string;
  imagem?: string;
  criado_em?: Date;
}

export async function criarPost(post: Post) {
  return await addDoc(postsCollection, {
    ...post,
    criado_em: new Date()
  });
}

export async function listarPosts(): Promise<(Post & { id: string })[]> {
  const snapshot = await getDocs(postsCollection);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Post)
  }));
}

export async function buscarPostPorSlug(
  slug: string
): Promise<(Post & { id: string }) | null> {
  const q = query(postsCollection, where("slug", "==", slug));

  const snapshot = await getDocs(q);

  if (snapshot.empty) {
    return null;
  }

  return {
    id: snapshot.docs[0].id,
    ...(snapshot.docs[0].data() as Post)
  };
}