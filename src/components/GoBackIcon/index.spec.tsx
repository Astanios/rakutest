import React from 'react';
import { shallow } from 'enzyme';

import GoBackIcon from './index';

describe('GoBackIcon', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<GoBackIcon />);
  });

  it('should render correctly', () => {
    expect(wrapper).toBeTruthy();
  });
});
