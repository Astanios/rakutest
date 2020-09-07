import React from 'react';
import { shallow } from 'enzyme';

import MovieThumbnail from '../MovieThumbnail';
import ListMovies from './index';

describe('ListMovies', () => {
  let wrapper;
  const mockProps = {
    movies: [{
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
  };

  beforeEach(() => {
    wrapper = shallow(<ListMovies {...mockProps} />);
  });

  it('should render correctly', () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.find(MovieThumbnail)).toHaveLength(2);
  });
});
