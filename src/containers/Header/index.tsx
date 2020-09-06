import React from 'react';
import { connect } from "react-redux";

import { movieSelectedSelector } from "../../store/movie/selectors";
import { MenuLink, MenuTitle, Nav, NavCenter, NavHeader, NavLeft, NavRight } from './style';
import { IState } from '../../store/models'
import { IHeaderProps } from './models';
import SearchBox from '../SearchBox';
import GoBackIcon from '../../components/GoBackIcon';

const Header = ({ movie }: IHeaderProps): React.ReactElement =>
  <Nav>
    <NavHeader>
      {!!movie ? (
        <>
          <NavLeft>
            <MenuLink href="/">
              <GoBackIcon />
            </MenuLink>
          </NavLeft>
          <NavCenter>
            <MenuTitle>
              {movie.original_title}
            </MenuTitle>
          </NavCenter>
        </>
      ) : (
          <NavCenter>
            <MenuTitle>
              Rakuten TV
        </MenuTitle>
          </NavCenter>
        )}
      <NavRight>
        <SearchBox />
      </NavRight>
    </NavHeader>
  </Nav >

const mapStateToProps = (state: IState): any => ({
  movie: movieSelectedSelector(state)
});

export default connect(
  mapStateToProps
)(Header);
