import { Character } from "@/models/caracter";
import { create } from "zustand";

type Action = {
  getCaracterByName: (name: Character["name"]) => void;
};

export const caracterStore = create<Character & Action>((set, get) => ({
  id: 0,
  name: "",
  status: "",
  species: "",
  type: "",
  gender: "",
  origin: { name: "", url: "" },
  location: { name: "", url: "" },
  image: "",
  episode: [],
  url: "",
  created: "",
  async getCaracterByName(name: Character["name"]) {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${name}`
    );
    const { results } = await response.json();
    set(results[0]); // Assuming you want the first character
  },
}));
