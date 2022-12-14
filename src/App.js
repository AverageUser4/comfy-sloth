import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home.js';
import Error from './pages/Error/Error.js';
import ProductPage from './pages/ProductPage/ProductPage.js';
import AllProducts from './pages/AllProducts/AllProducts.js';
import About from './pages/About/About.js';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';

export default function App() {
  return (
    <Router>

      <Header/>

      <Switch>

        <Route path="/products/:id">
          <ProductPage/>
        </Route>

        <Route path="/products">
          <AllProducts/>
        </Route>

        <Route path="/about">
          <About/>
        </Route>

        <Route exact path="/">
          <Home/>
        </Route>

        <Route path="*">
          <Error message="404 page not found."/>
        </Route>

      </Switch>

      <Footer/>

    </Router>
  );
}