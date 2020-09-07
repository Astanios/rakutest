import React from 'react';
import { shallow } from 'enzyme';

import MovieThumbnail from '../MovieThumbnail';
import Details from './index';
import movieMock from '../../utils/__mocks__/movie'

describe('Details', () => {
  let wrapper;
  const mockProps = {
    startGetMovieById: jest.fn(() => movieMock),
    movie: null,
    match: {
      params: {
        selectedId: '123'
      }
    }
  };

  beforeEach(() => {
    wrapper = shallow(<Details {...mockProps} />);
  });

  it('should render correctly', () => {
    expect(wrapper).toBeTruthy();
  });
});