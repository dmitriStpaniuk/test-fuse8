import { searchCharacters } from "@/api/rickiAndMorty";
import { CharacterResponse } from "@/models/caracter";
import { create } from "zustand";

interface SearchState {
  searchTerm: string;
  timerId: string | number | NodeJS.Timeout | undefined;
  result: CharacterResponse;
  error: string | null;
  status: "idle" | "loading" | "success" | "error";
  setSearchTerm: (term: string) => void;
  searchCharacters: () => Promise<void>;
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

  setSearchTerm: (term) => {
    set({ searchTerm: term });

    // Дебаунс с очисткой
    clearTimeout(get().timerId);
    const timer = setTimeout(async () => {
      if (term.length >= 3) {
        await get().searchCharacters();
      }
    }, 500);

    set({ timerId: timer }); // Сохраняем ID таймера
  },

  searchCharacters: async () => {
    const term = get().searchTerm;
    if (term.length < 3) return;

    set({ status: "loading", error: null });

    try {
      const { data, error } = await searchCharacters(term);

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
