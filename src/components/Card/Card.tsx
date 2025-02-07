import { Character } from "@/models/caracter";
import Link from "next/link";
const statusColors = {
  Alive: 'text-[#267504]',
  Dead: 'text-[#820A0A]',
  unknown: 'text-gray-500'
} as const;
const Card = ({ character }: { character: Character }) => {
  return (
    <Link
      href={`/character/${character.id}`}

      className="block transition-transform hover:scale-105"
    >
      <div className="flex cursor-pointer flex-col items-center justify-center gap-8 p-4 font-fira text-[30px] shadow-lg transition-all duration-100 hover:shadow-2xl">
        <h3 className="truncate font-fira text-[25px] text-[#282626]">{character.name}</h3>
        <div className="flex w-full justify-between font-montserrat text-[14px] text-[#767676]">

          <div>
            Status: <span className={ `font-bold ${statusColors[character.status]}`}>{character.status}</span>
          </div>
          <div>Created: {new Date(character.created).toLocaleDateString('ru-RU')}</div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
