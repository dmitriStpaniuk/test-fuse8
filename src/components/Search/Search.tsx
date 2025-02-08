"use client";
import { useSearchStore } from "@/stores/storeCharacter";
import CardList from "../CardList/CardList";

const Search = () => {
  const { searchTerm, setSearchTerm, result, error, status } = useSearchStore();
  return (
    <>
      <div className="mx-auto flex flex-col flex-wrap justify-between gap-3">
        <input
          type="search"
          autoFocus
          className="mx-auto mt-8 block h-[48px] w-[90%] p-3 font-fira text-[18px] font-bold shadow-md transition-all placeholder:text-left placeholder:text-[#656EC2] focus:border-2 focus:border-[#656EC2] focus:outline-none focus:ring-1 focus:ring-[#656EC2] md:mt-32 md:h-[64px] md:w-[626px] md:text-[22px]"
          placeholder="Search characters..."
          required
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <p className="pl-7 font-montserrat text-[14px] font-extralight text-[#282626] md:text-[16px]">
          Found characters: {result.info.count}
        </p>
      </div>
      <div>
        {status === "idle" && <p className="pl-7 font-montserrat text-[14px] font-extralight text-[#282626] md:text-[16px]">Enter the 3 symbols</p>}
        {status === "loading" && <div>Загрузка...</div>}


        {status === "error" && (
          <div className="border-r-2 bg-[#fee2e2] p-1 text-red-500">
            {error}
          </div>
        )}
        {result.results.length > 0 && <CardList characters={result.results} />}
      </div>
    </>
  );
};

export default Search;
