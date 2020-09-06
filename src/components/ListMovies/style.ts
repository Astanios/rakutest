import styled from 'styled-components';

export const ListWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  height: 80%;
  width: 100%;
  overflow-x: scroll;
  margin: 0;
  padding: 0;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
    border:1px solid black;
  }
`;