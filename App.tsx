import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import DashboardContainer from './src/containers/dashboardContainer';

const App = () => {
  return (
    <Provider store={store}>
      <DashboardContainer />
    </Provider>
  );
};
export default App;
