import React, { useEffect } from 'react';
import { verifyAuth } from 'actions/authAction';
import { ToastProvider } from 'react-toast-notifications';
import ServiceApp from 'ServiceApp';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from 'components/Spinner';
import Routes from 'Routes';

function App() {
  const { initialLoad } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const unscribe = dispatch(verifyAuth());
    return unscribe;
  }, [dispatch]);

  if (!initialLoad) return <Spinner />;

  return (
    <>
      <ToastProvider>
        <ServiceApp />
      </ToastProvider>
    </>
  );
}

export default App;
