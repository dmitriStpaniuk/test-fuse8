const Card = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 p-4 font-fira text-[30px] shadow-lg">
      <div>Stair Goblin - Mythological Creature</div>
      <div className="flex w-full justify-between font-montserrat text-[14px] text-[#767676]">
        <div>
          Status: <span className=" font-bold text-[#267504]">Alive</span>
        </div>
        <div>Created: 04.11.2017</div>
      </div>

    </div>
  );
};

export default Card;
