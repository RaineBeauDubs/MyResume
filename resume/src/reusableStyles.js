import styled from 'styled-components';

export const ResSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1.7rem

  // border: 1px solid red;
`;

export const ResSectionLeft = styled.div`
  width: 15%;
  font-weight: bold;
  text-align: left

  // border: 1px solid green;
`;

export const ResSectionRight = styled.div`
  width: 80%;

  // border: 1px solid purple;
`;

export const List = styled.ul`
  list-style: square inside none;
  display: flex;
  flex-wrap: wrap;
`;

export const ListItems = styled.li`
  margin: 0.5rem;
  text-align: left;
  justify-content: space-evenly
  min-width: 35rem;

  // border: 1px solid orange;
`;