import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes/routes.js';

var ReactGA = require('react-ga');
ReactGA.initialize('UA-90091454-1');

function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

class AppRoutes extends React.Component {
  render() {
    return (
      <Router history={browserHistory} routes={routes} onUpdate={logPageView}/>
    );
  }
}


ReactDOM.render(<AppRoutes/>, document.getElementById('Wrapper'));
