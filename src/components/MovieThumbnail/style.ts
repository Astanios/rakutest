import styled from 'styled-components';
import { Link } from "react-router-dom";

export const MovieThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100px;
  margin:  2px;
  justify-content: center;
  align-items: center;
`;

export const MovieThumbnailImage = styled.img`
  width: 100px;
  height: 150px;
`;


export const MovieThumbnailTitle = styled.p`
  font-size; 14px;
  font-weight: bold;
  overflow: hidden;
  max-width: 100px;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 1px
  color: inherit;
  margin-top: 2px;
`;

export const MovieThumbnailLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`;
