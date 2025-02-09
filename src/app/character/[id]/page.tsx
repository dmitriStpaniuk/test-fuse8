import { Character } from "@/models/character";
import ClientCharacterPage from "@/components/ClientCard/ClientPage";

export async function generateStaticParams() {
  // Сначала получаем информацию о количестве страниц
  const initialResponse = await fetch(
    "https://rickandmortyapi.com/api/character"
  );
  const initialData = await initialResponse.json();
  const totalPages = initialData.info.pages;

  // Собираем все ID со всех страниц
  const allCharacters: Character[] = [];

  for (let page = 1; page <= totalPages; page++) {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    const data = await response.json();
    allCharacters.push(...data.results);
  }

  // Возвращаем массив всех ID
  return allCharacters.map((character) => ({
    id: character.id.toString(),
  }));
}

// Серверный компонент
export default function CharacterPage() {
  return <ClientCharacterPage />;
}
