import { Character } from "@/models/character";
import ClientCharacterPage from "@/components/ClientCard/ClientPage";


// Эта функция должна быть на серверной части
export async function generateStaticParams() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();
  return data.results.map((character: Character) => ({
    id: character.id.toString(),
  }));
}

// Серверный компонент
export default function CharacterPage() {
  return <ClientCharacterPage />;
}
