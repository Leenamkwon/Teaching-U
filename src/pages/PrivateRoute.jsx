import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser, initialLoad } = useSelector((state) => state.auth);

  if (!initialLoad) return <div></div>;

  return (
    <Route
      {...rest}
      render={(props) => (currentUser ? <Component {...props} /> : <Redirect to='/login' />)}
    />
  );
}
