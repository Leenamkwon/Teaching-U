import { fetchUserServices } from 'actions/serviceActions';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function UserServices() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('hi');
    fetchUserServices();
  }, []);

  return (
    <div className='container'>
      <div className='content-wrapper'>
        <div className='columns'>I am UserService PAGE!</div>
      </div>
    </div>
  );
}
