import React from 'react';
import { Route } from 'react-router-dom';
import { shallow } from 'enzyme';

import Home from '../Home';
import Details from '../Details';
import Spinner from '../Spinner';
import Header from '../Header';

import AppNavigation from './index';

describe('AppNavigation', () => {
  const wrapper = shallow(<AppNavigation />);

  it('should render correct routes', () => {
    const pathMap = wrapper.find(Route).reduce((pathM, route) => {
      const routeProps = route.props();
      pathM[routeProps.path] = routeProps.component;
      return pathM;
    }, {});

    expect(pathMap['/']).toBe(Home);
    expect(pathMap['/details/:selectedId']).toBe(Details);
  });
});
