import { CharacterResponse, SearchResult } from "@/models/caracter";

export async function searchCharacters(
  name: string,
  page: number = 1
): Promise<SearchResult<CharacterResponse>> {

  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(name)}&page=${page}`,
      {
        next: { revalidate: 60 }, // ISR на 60 секунд
      }
    );

    // Обработка HTTP ошибок
    // if (!response.ok) {
    //   const errorData = await response.json();
    //   return {
    //     data: null,
    //     error: errorData.message || "Failed to fetch characters",
    //     status: response.status,
    //   };
    // }

    const data: CharacterResponse = await response.json();

    // Проверка пустого результата
    if (!response.ok || !data.results) {
      return {
        data: null,
        error: "No characters found",
        status: 404,
      };
    }


    return { data, error: null, status: 200 };
  } catch (error) {
    // Обработка сетевых ошибок
    console.error("Search error:", error);
    return {
      data: null,
      error: error instanceof Error ? error.message : "Network error",
      status: 500,
    };
  }
}
