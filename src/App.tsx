import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import routerConfig from './router';
import 'antd/dist/reset.css';

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={routerConfig} />
    </Provider>
  );
}

export default App;
