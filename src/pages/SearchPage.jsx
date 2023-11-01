import { useState, useEffect } from "react";
import { getMovieSearch } from "../api/api";
import styled from "styled-components";
import Card from "../components/Card";

const SearchPage = ({ movieTitle }) => {
  const [searchMovie, setSearchMovie] = useState([]);

  useEffect(() => {
    getMovieSearch(movieTitle).then((result) => {
      setSearchMovie(result);
    });
  }, [movieTitle]);

  return (
    <>
      <Section className="relative flex flex-wrap justify-center items-center gap-1 py-[2rem] px-[3rem]">
        {searchMovie.map((movie, i) => (
          <Card
            key={i}
            title={movie.original_title}
            imgUrl={movie.poster_path}
          />
        ))}
      </Section>
    </>
  );
};
const Section = styled.section`
  margin-top: 6rem;
  background: #222831;
`;

export default SearchPage;
