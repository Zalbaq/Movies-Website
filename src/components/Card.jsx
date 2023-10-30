import "../css/tailwind.css";

const Card = ({ title, imgUrl }) => {
  return (
    <>
      <div className="card relative h-[30rem] w-[15rem] p-2">
        <img
          className="h-[22rem] rounded-2xl object-contain"
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
