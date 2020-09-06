import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { movieSelectedSelector } from "../../store/movie/selectors";
import { MenuLink, MenuTitle, Nav, NavCenter, NavHeader, NavLeft, NavRight } from './style';
import { IHeaderProps } from './models';
import SearchBox from '../../components/SearchBox';

const Header = ({ movie }: IHeaderProps): React.ReactElement =>
  <Nav>
    <NavHeader>
      {movie?.original_title &&
        <NavLeft>
          <MenuLink href="/">
            <img src='https://www.iconninja.com/files/173/559/776/left-direction-arrows-arrow-navigation-back-icon.svg' height="26" />
          </MenuLink>
        </NavLeft>
      }
      <NavCenter>
        <MenuTitle>
          {movie?.original_title ? movie.original_title : 'Rakuten TV'}
        </MenuTitle>
      </NavCenter>
      <NavRight>
        <SearchBox />
      </NavRight>
    </NavHeader>
  </Nav >

const mapStateToProps = (state: any): any => ({
  movie: movieSelectedSelector(state)
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
/*

        <NavRight>
      <Input type="text" placeholder="Search" />
    </NavRight>
        */