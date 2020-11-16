import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import ServiceApp from 'ServiceApp';

function App() {
  return (
    <>
      <ToastProvider>
        <Router>
          <ServiceApp />
        </Router>
      </ToastProvider>
    </>
  );
}

export default App;
