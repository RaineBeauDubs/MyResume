import styled from 'styled-components';

export const ResSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  // align-items: center;
  font-size: 1.7rem

  // border: 1px solid red;
`;

export const ResSectionLeft = styled.div`
  width: 17%;
  font-weight: bold;
  font-size: 2.3rem;
  text-align: right;
  margin: 1rem
  color: rgb(68, 0, 0);

  // border: 1px solid green;
`;

export const ResSectionRight = styled.div`
  width: 75%;

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