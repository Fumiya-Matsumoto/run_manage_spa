import logo from './logo.svg';
import React, { Component }  from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// components
import { PracticePosts } from './containers/PracticePosts.jsx';
import { Calender } from './containers/Calender.jsx';
import { Feeds } from './containers/Feeds.jsx';
import { MyPage } from './containers/MyPage.jsx';

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/practice_posts">
          <PracticePosts />
        </Route>
        <Route
          exact
          path="/calender"
        >
          <Calender />
        </Route>
        <Route
          exact
          path="/feeds">
          <Feeds />
        </Route>
        <Route
          exact
          path="/mypage">
          <MyPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
