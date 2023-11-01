import { useState, useEffect } from "react";
import { getTvList } from "../api/api";
import styled from "styled-components";
import Card from "../components/Card";
import { useLocation } from "react-router-dom";

const TopRatesPage = ({ movieTitle }) => {
  const [tv, setTv] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (movieTitle.length < 4 && location.pathname === "/tv") {
      getTvList().then((result) => {
        setTv(result);
      });
    }
  }, [movieTitle]);

  return (
    <>
      <Section className="relative flex flex-wrap justify-center items-center gap-1 py-[2rem] px-[3rem]">
        {tv.map((movie, i) => (
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

export default TopRatesPage;
