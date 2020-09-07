import React from 'react';
import { shallow } from 'enzyme';

import MovieSummary from './index';
import { MovieSummaryImage } from './style'
import MovieSummaryInfo from './components/MovieSummaryInfo';
import movieMock from '../../utils/__mocks__/movie';

describe('MovieSummary', () => {
  let wrapper;
  const mockProps = {
    movie: movieMock
  };

  beforeEach(() => {
    wrapper = shallow(<MovieSummary {...mockProps} />);
  });

  it('should render correctly', () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.find(MovieSummaryImage)).toBeTruthy();
    expect(wrapper.find(MovieSummaryInfo)).toBeTruthy();
  });
});
