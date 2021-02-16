import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import ServiceApp from 'ServiceApp';

function App() {
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
