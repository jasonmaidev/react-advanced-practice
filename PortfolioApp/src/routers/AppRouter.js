import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import PortfolioPage from '../components/PortfolioPage';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import HomePage from '../components/HomePage';
import Contact from '../components/contact';
import PortfolioItem from '../components/PortfolioItem';


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/portfolio" component={PortfolioPage} exact={true} />
        <Route path="/portfolio/:id" component={PortfolioItem} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;