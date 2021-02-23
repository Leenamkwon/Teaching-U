import Home from 'pages/Home';
import { Switch, Route } from 'react-router-dom';
import Faq from 'pages/Faq';
import Profile from 'pages/Profile';
import Services from 'pages/Services';
import Login from 'pages/Login';
import Register from 'pages/Register';
import ServiceDetails from 'pages/ServiceDetails';
import PrivateRoute from 'pages/PrivateRoute';
import PublicRoute from 'pages/PublicRoute';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <PrivateRoute path='/faq' component={Faq} />
    <Route path='/profile' component={Profile} />
    <Route path='/services/:serviceId' component={ServiceDetails} />
    <Route path='/services' component={Services} />
    <PublicRoute path='/login' component={Login} />
    <PublicRoute path='/register' component={Register} />
  </Switch>
);

export default Routes;
