import React from 'react'
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

window.$ = require('jquery');

import App from './containers/App'
import IndexPage from './containers/IndexPage'
import Page1 from './containers/Page1'

render(
  <div className="container">
    <Router history={createBrowserHistory()}>
      <Route path="/" component={App}>
        <IndexRoute component={IndexPage} />
        <Route path="users" component={Page1}/>
        <Route path="*" component={Page1}/>
      </Route>
    </Router>
  </div>
  , document.getElementById('app')
);
