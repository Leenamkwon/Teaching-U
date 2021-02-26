import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Faq from 'pages/Faq';
import Profile from 'pages/Profile';
import Services from 'pages/Services';
import Login from 'pages/Login';
import Register from 'pages/Register';
import ServiceDetails from 'pages/ServiceDetails';
import PrivateRoute from 'pages/PrivateRoute';
import PublicRoute from 'pages/PublicRoute';
import ServiceCreate from 'pages/services/ServiceCreate';
import UserServices from 'pages/services/UserServices';
import SentOffers from 'pages/offers/SentOffer';
import ReceivedOffers from 'pages/offers/ReceivedOffer';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <PrivateRoute path='/faq' component={Faq} />
      <Route path='/profile' component={Profile} />
      <Route exact path='/services' component={Services} />
      <PrivateRoute exact path='/services/new' component={ServiceCreate} />
      <PrivateRoute exact path='/services/me' component={UserServices} />
      <Route path='/services/:serviceId' component={ServiceDetails} />
      <PrivateRoute path='/offers/sent' component={SentOffers} />
      <PrivateRoute path='/offers/received' component={ReceivedOffers} />
      <PublicRoute path='/login' component={Login} />
      <PublicRoute path='/register' component={Register} />
      <Route path='*' render={() => <div>404 ERROR NOT FOUND</div>} />
    </Switch>
  );
};

export default Routes;
