import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './components/LandingPage/LandingPage';
import ComicDetails from './components/ComicDetails/ComicDetails';

function App() {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/">
          <Layout>
            <LandingPage />
          </Layout>
        </Route>

        <Route exact path="/comic" >
          <Layout>
            <ComicDetails />
          </Layout>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
