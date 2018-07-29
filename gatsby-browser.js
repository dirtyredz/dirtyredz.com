import React from 'react'
import { Provider } from 'react-redux'
// import { Router } from 'react-router-dom'
import store from './src/redux/store'

// export const replaceRouterComponent = ({ history }) => {

//   const ConnectedRouterWrapper = ({ children }) => (
//     <Provider store={store}>
//       <Router history={history}>{children}</Router>
//     </Provider>
//   );

//   return ConnectedRouterWrapper;
// };
export const wrapRootComponent = Root => {
  return () => (
    <Provider store={store}>
      <Root.Root />
    </Provider>
  );
};