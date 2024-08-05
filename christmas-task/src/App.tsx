import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Header from './common/Header/Header';
import Footer from './common/Footer/Footer';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Main from './pages/Main/Main';
import Toys from './pages/Toys/Toys';
import Tree from './pages/Tree/Tree';

const App = function () {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/toys">
          <Toys />
        </Route>
        <Route path="/tree">
          <Tree />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
};

export default App;
