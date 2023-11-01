import "../css/tailwind.css";

const Card = ({ title, imgUrl }) => {
  return (
    <>
      <div className="card basis-[20rem] relative h-[30rem] w-[15rem] p-5 mb-10">
        <img
          className=" rounded-2xl object-contain"
          src={`https://image.tmdb.org/t/p/w300${imgUrl}`}
        />
        <h3 className="flex flex-col justify-center items-center mt-3 text-white text-2xl text-center whitespace-normal">
          {title}
        </h3>
      </div>
    </>
  );
};
export default Card;
