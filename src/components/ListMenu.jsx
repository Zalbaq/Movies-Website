import styled from "styled-components";

const ListMenu = ({ className }) => {
  return (
    <>
      <ul className={className}>
        <ListItem>
          <a href="/">Popular</a>
        </ListItem>
        <ListItem>
          <a href="/tv">Top Rated</a>
        </ListItem>
        <ListItem>
          <a href="">Rated Movies</a>
        </ListItem>
        <ListItem>
          <a href="">TV Movies</a>
        </ListItem>
      </ul>
    </>
  );
};

const ListItem = styled.li`
  margin-right: 2rem;
  font-size: 1.4rem;
`;
export default ListMenu;
