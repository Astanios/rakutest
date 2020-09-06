import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  InputStyled,
  InputContainer,
  SearchBoxContainer,
  SearchBoxItem,
  SearchBoxLink
} from "./style";
import { startSearchMovie } from "../../store/movie/actions";
import { searchMoviesSelector } from "../../store/movie/selectors";

const SEARCH_ITEMS_LIMIT = 6;
const SEARCH_ITEMS_CHARS_LIMIT = 2;

const SearchInput = ({ startSearchMovie, searchMoviesHistory }: any): React.ReactElement => {
  const [inputValue, setInputValue] = React.useState("");
  useEffect(() => clearTimeout(), []);

  const onChangeSearch = (e: any): void => {
    const { value } = e.target;
    setInputValue(value);
    if (value.length > SEARCH_ITEMS_CHARS_LIMIT) {
      startSearchMovie(value);
    }
  };

  return (
    <InputContainer>
      <InputStyled
        placeholder="🔎search"
        aria-label="search-input"
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
              const releaseDate = !isNaN(date) ? `(${date})` : "";
              const itemText = `${title} ${releaseDate}`;

              return (
                <SearchBoxLink key={id} to={"/details/" + id}>
                  <SearchBoxItem>{itemText}</SearchBoxItem>
                </SearchBoxLink>
              );
            })}
      </SearchBoxContainer>
    </InputContainer>
  );
};

const mapStateToProps = (state: any) => ({
  searchMoviesHistory: searchMoviesSelector(state)
});

const mapDispatchToProps = {
  startSearchMovie
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchInput);
