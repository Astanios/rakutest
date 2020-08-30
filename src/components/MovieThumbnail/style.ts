import styled from 'styled-components';

export const MovieThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 220;
  padding: 10px;
  border: solid 1px #000;
  border-radius: 10px;
  margin: 10px;
  justify-content: center;
  align-items: center;
`;

export const MovieThumbnailImage = styled.img`
  width: 200px;
  height: 300px;
`;


export const MovieThumbnailTitle = styled.p`
  font-size; 14px;
  font-weight: bold;
`;