import { Character } from "@/models/character";

export async function generateStaticParams() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();

  return data.results.map((character: Character) => ({
    id: character.id.toString(),
  }));
}
