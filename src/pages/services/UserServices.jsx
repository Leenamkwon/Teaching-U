import { fetchUserServices } from 'actions/userAction';
import ServiceItem from 'components/service/ServiceItem';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function UserServices() {
  const { myServices } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserServices());
  }, [dispatch]);

  return (
    <div className='container'>
      <div className='content-wrapper'>
        <h1 className='title'>Your Services</h1>
        <div className='columns is-multiline'>
          {myServices.map((service) => (
            <div key={service.id} className='column '>
              <ServiceItem service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
