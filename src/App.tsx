import React from 'react';
import { Provider } from 'react-redux';

import AppNavigation from './containers/AppNavigation';

import configureStore from './store';

const store = configureStore();

function App(): React.ReactElement {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}

export default App;
