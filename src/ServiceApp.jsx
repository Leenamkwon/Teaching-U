import React from 'react';
import Sidebar from 'components/Sidebar';
import Navbar from 'components/Navbar';
import Routes from 'Routes';

function ServiceApp() {
  return (
    <>
      <Navbar id='navbar-main' />
      <Navbar id='navbar-clone' />
      <Sidebar />
      <Routes />
    </>
  );
}

export default ServiceApp;
