import searchIcon from "../assets/search.svg";

const Searchbar = ({ searchMovie, setSearchMovie }) => {
  const divClass = [
    "flex",
    "items-center",
    "relative",
    "basis-[30 rem]",
    "h-[3.5rem]",
    "rounded-3xl",
    "overflow-hidden",
  ];

  const inputClass = [
    "h-[100%]",
    "w-[100%]",
    "pl-10 pr-[5rem]",
    "outline-none",
    "text-2xl",
    "text-black",
  ];
  return (
    <>
      <div className={divClass.join(" ")}>
        <input
          className={inputClass.join(" ")}
          type="text"
          onChange={({ target }) => {
            setSearchMovie(target.value);
          }}
        />
        <button className="absolute right-[1.5rem]">
          <img className="h-[2.5rem] w-[2.5rem]" src={searchIcon} alt="" />
        </button>
      </div>
    </>
  );
};

export default Searchbar;
