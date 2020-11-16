import Home from 'pages/Home';
import { Switch, Route } from 'react-router-dom';
import Faq from 'pages/Faq';
import Profile from 'pages/Profile';
import Services from 'pages/Services';
import Login from 'pages/Login';
import Register from 'pages/Register';
import ServiceDetails from 'pages/ServiceDetails';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/faq' component={Faq} />
    <Route path='/profile' component={Profile} />
    <Route path='/services/:serviceId' component={ServiceDetails} />
    <Route path='/services' component={Services} />
    <Route path='/login' component={Login} />
    <Route path='/register' component={Register} />
  </Switch>
);

export default Routes;
