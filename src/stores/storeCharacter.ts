import { searchCharacters } from "@/api/rickiAndMorty";
import { Character, CharacterResponse } from "@/models/character";
import { create } from "zustand";

interface SearchState {
  searchTerm: string;
  timerId: string | number | NodeJS.Timeout | undefined;
  result: CharacterResponse;
  error: string | null;
  status: "idle" | "loading" | "success" | "error";
  currentPage: number;
  setSearchTerm: (term: string) => void;
  searchCharactersByName: (page: number) => Promise<void>;
  searchCharacterById: (id: string) => Character | undefined;
  setPage: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
}

const initialState = {
  info: { count: 0, pages: 0, next: null, prev: null },
  results: [],
};

export const useSearchStore = create<SearchState>((set, get) => ({
  searchTerm: "",
  result: {
    info: { count: 0, pages: 0, next: null, prev: null },
    results: [],
  },
  error: null,
  status: "idle",
  timerId: undefined,
  currentPage: 1,

  setPage: (page) => {
    set({ currentPage: page });
    get().searchCharactersByName(page);
  },
  nextPage: () => {
    const { currentPage, result } = get();
    if (result.info.next) {
      const nextPage = currentPage + 1;
      set({ currentPage: nextPage });
      get().searchCharactersByName(nextPage);
    }
  },

  prevPage: () => {
    const { currentPage, result } = get();
    if (result.info.prev) {
      const prevPage = currentPage - 1;
      set({ currentPage: prevPage });
      get().searchCharactersByName(prevPage);
    }
  },

  setSearchTerm: (term) => {
    set({ searchTerm: term });

    // Дебаунс с очисткой
    clearTimeout(get().timerId);
    const timer = setTimeout(async () => {
      if (term.length >= 3) {
        await get().searchCharactersByName(get().currentPage);
      }
    }, 500);

    set({ timerId: timer }); // Сохраняем ID таймера
  },

  searchCharacterById: (id) => {
    console.log(`zustandt: ${id}`);
    const character = get().result.results.find(
      (character) => character.id === Number(id)
    );
    console.log(`zustandt: ${character}`);

    if (!character) {
      set({ status: "error", error: "Character not found" });
      return undefined;
    }
    return character;
  },

  searchCharactersByName: async (page) => {
    const term = get().searchTerm;
    if (term.length < 3) return;

    set({ status: "loading", error: null });

    try {
      const { data, error } = await searchCharacters(term, page);

      if (error || !data) {
        set({
          status: "error",
          error: error || "Ошибка поиска",
          result: initialState,
        });
        return;
      }

      set({ status: "success", result: data, error: null });
    } catch (error) {
      set({
        status: "error",
        error: error instanceof Error ? error.message : "Ошибка сети",
        result: initialState,
      });
    }
  },
}));
