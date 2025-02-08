"use client";

import { Character } from "@/models/character";
import { useSearchStore } from "@/stores/storeCharacter";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from 'next/image';
import { statusColors } from "@/components/Card/Card";


// генерация статических параметров для страницы персонажа на gh-pages
export async function generateStaticParams() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();
  return data.results.map((character: Character) => ({
    id: character.id,
  }));
}
const CharacterPage = () => {
  const params = useParams();
  const { searchCharacterById } = useSearchStore();
  const [character, setCharacter] = useState<Character | undefined>(undefined);

  useEffect(() => {
    const result = searchCharacterById(params.id as string);
    setCharacter(result);
  }, [params.id, searchCharacterById]);

  if (!character) return <div>Character not found</div>;

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-lg bg-white shadow-lg">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-11/12">
            <Image 
              src={character.image} 
              alt={character.name}
              width={300}
              height={300}
              className="h-auto w-full object-cover"
            />
          </div>
          
          <div className="w-full p-4 md:w-2/3 md:p-8">
            <h1 className="mb-4 text-2xl font-bold md:text-3xl">{character.name}</h1>
            
            <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <p className="text-gray-600">Status</p>
                <p className={`font-bold ${statusColors[character.status]}`}>{character.status}</p>
              </div>
              <div>
                <p className="text-gray-600">Species</p>
                <p className="font-semibold">{character.species}</p>
              </div>
              <div>
                <p className="text-gray-600">Gender</p>
                <p className="font-semibold">{character.gender}</p>
              </div>
              <div>
                <p className="text-gray-600">Origin</p>
                <p className="font-semibold">{character.origin.name}</p>
              </div>
            </div>

            <div className="mb-4 md:mb-6">
              <p className="text-gray-600">Last known location</p>
              <p className="font-semibold">{character.location.name}</p>
            </div>

            <div>
              <p className="text-gray-600">Created</p>
              <p className="font-semibold">
                {new Date(character.created).toLocaleDateString('ru-RU')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
