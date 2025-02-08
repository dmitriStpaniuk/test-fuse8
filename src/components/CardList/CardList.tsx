import { Character } from "@/models/character";
import Card from "../Card/Card";
import { v4 as uuidv4 } from "uuid";

export default function CardList({ characters }: { characters: Character[] }) {
  // console.log("characters", characters);
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6 ">
      {characters.length === 1 ? (
        <div className="md:col-span-2 lg:col-span-4 lg:col-start-2">
          <Card character={characters[0]} />
        </div>
      ) : (
        characters.map((character, index) => (
          <div
            key={uuidv4()}
            className={`
      ${
        index < 2
          ? "lg:col-span-3   lg:first:col-start-1 lg:last:col-start-4"
          : "lg:col-span-2"
      }
    `}
          >
            <Card character={character} />
          </div>
        ))
      )}
    </div>
  );
}
