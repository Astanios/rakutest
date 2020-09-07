import React from 'react';
import { shallow } from 'enzyme';

import MovieThumbnail from './index';
import { MovieThumbnailTitle } from './style'
import mockThumb from '../../utils/__mocks__/movieList';

describe('MovieThumbnail', () => {
  let wrapper;
  const mockProps = {
    movie: mockThumb.results[0]
  }
  beforeEach(() => {
    wrapper = shallow(<MovieThumbnail {...mockProps} />);
  });

  it('should render correctly', () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.find(MovieThumbnailTitle).text()).toBe(mockThumb.results[0].title);
  });
});
