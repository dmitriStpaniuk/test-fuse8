const Search = () => {
  return (
    <header>
      <div className="mx-auto flex flex-col flex-wrap justify-between gap-3">
        <form>
          <input
            type="search"
            autoFocus
            className="mt-32 block h-[64px] w-[626px] p-3 font-fira text-[22px] font-bold shadow-md transition-all placeholder:text-left placeholder:text-[#656EC2] focus:border-2 focus:border-[#656EC2] focus:outline-none focus:ring-1 focus:ring-[#656EC2]"
            placeholder="Search characters..."
            required
          />
        </form>
        <div>
          <p className="pl-7 font-montserrat text-[16px] font-extralight text-[#282626]">Found characters: 8</p>
        </div>
      </div>
    </header>
  );
};

export default Search;
