import React from 'react';
import { shallow } from 'enzyme';

import { ListContainer, ListTitle } from "./style";
import ListMovies from '../ListMovies';
import ListSuggestions from './index';

describe('ListSuggestions', () => {
  let wrapper;
  const mockProps = {
    moviesLists: [{
      title: 'Suggestions List 1',
      list: [{
        poster_path: 'test_path',
        title: 'Mocked Movie 1',
        id: 1,
        release_date: '1970-1-1'
      }, {
        poster_path: 'test_path',
        title: 'Mocked Movie 2',
        id: 2,
        release_date: '1970-1-1'
      }]
    }, {
      title: 'Suggestions List 2',
      list: [{
        poster_path: 'test_path',
        title: 'Mocked Movie 3',
        id: 1,
        release_date: '1970-1-1'
      }, {
        poster_path: 'test_path',
        title: 'Mocked Movie 4',
        id: 2,
        release_date: '1970-1-1'
      }]
    }]
  };
  beforeEach(() => {
    wrapper = shallow(<ListSuggestions {...mockProps} />);
  });

  it('should render correctly', () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.find(ListMovies)).toHaveLength(2);
    const listMovies = wrapper.find(ListContainer);
    expect(listMovies).toHaveLength(2);

    mockProps.moviesLists.forEach((movieList, i) => {
      expect(listMovies.at(i).find(ListTitle).text()).toBe(movieList.title);
      expect(listMovies.at(i).find(ListMovies)).toBeTruthy();
    });
  });
});
