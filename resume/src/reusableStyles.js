import styled from 'styled-components';

export const ResSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: left;
  font-size: 1.7rem
  margin: 2rem 1rem 1rem;

  // border: 1px solid red;
`;

export const ResSectionTop = styled.div`
  text-align: left;
  font-weight: bold;
  font-size: 2.5rem;
  color: rgb(68, 0, 0);
  // border: 1px solid green;
`;

export const ResSectionBottom = styled.div`

  // border: 1px solid purple;
`;

export const List = styled.ul`
  list-style: square inside none;
  display: flex;
  flex-wrap: wrap;
  margin: 0.5rem;
`;

export const ListItems = styled.li`
  margin: 0.1rem;
  text-align: left;
  justify-content: space-evenly
  min-width: 35rem;

  // border: 1px solid orange;
`;