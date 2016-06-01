import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Dashboard from './components/Dashboard';
import NotFoundPage from './components/NotFoundPage.js';
import LoginForm from './components/LoginForm.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard}/>
    <Route path="/login" component={LoginForm}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
