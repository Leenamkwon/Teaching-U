import React, { useEffect } from 'react';
import { verifyAuth } from 'actions/authAction';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import ServiceApp from 'ServiceApp';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unscribe = dispatch(verifyAuth());
    return unscribe;
  }, [dispatch]);

  return (
    <>
      <Router>
        <ToastProvider>
          <ServiceApp />
        </ToastProvider>
      </Router>
    </>
  );
}

export default App;
