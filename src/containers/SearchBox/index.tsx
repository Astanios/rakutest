import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  InputStyled,
  InputContainer,
  SearchBoxContainer,
  SearchBoxItem,
  SearchBoxLink
} from './style';
import { startSearchMovie } from '../../store/movie/actions';
import { ISearchBoxProps } from './models';

const SEARCH_ITEMS_LIMIT = 5;
const SEARCH_ITEMS_CHARS_LIMIT = 3;

const SearchInput = ({ startSearchMovie, searchMoviesHistory }: ISearchBoxProps): React.ReactElement => {
  const [inputValue, setInputValue] = React.useState('');
  useEffect(() => clearTimeout(), []);

  const onChangeSearch = (e: React.SyntheticEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;
    setInputValue(value);
    if (value.length > SEARCH_ITEMS_CHARS_LIMIT) {
      startSearchMovie(value);
    }
  };

  return (
    <InputContainer>
      <InputStyled
        placeholder='search'
        aria-label='search-input'
        value={inputValue}
        onChange={onChangeSearch}
      />
      <SearchBoxContainer>
        {inputValue.length > SEARCH_ITEMS_CHARS_LIMIT &&
          Array.isArray(searchMoviesHistory) &&
          searchMoviesHistory
            .slice(0, SEARCH_ITEMS_LIMIT)
            .map(({ id, title, release_date }) => {
              const date = new Date(release_date).getFullYear();
              const releaseDate = !isNaN(date) ? `(${date})` : '';
              const itemText = `${title} ${releaseDate}`;

              return (
                <SearchBoxLink key={id} to={'/details/' + id}>
                  <SearchBoxItem>{itemText}</SearchBoxItem>
                </SearchBoxLink>
              );
            })}
      </SearchBoxContainer>
    </InputContainer>
  );
};

const mapStateToProps = (state: any) => ({
  searchMoviesHistory: state.movie.searchMoviesHistory
});

const mapDispatchToProps = {
  startSearchMovie
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchInput);
