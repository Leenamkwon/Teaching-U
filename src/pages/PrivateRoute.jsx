import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useSelector((state) => state.auth);

  console.log(currentUser);
  return <Route {...rest} render={(props) => (!!currentUser ? <Component {...props} /> : <div>asd</div>)} />;
}
