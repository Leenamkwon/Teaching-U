import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSelectedService } from 'actions/serviceActions';
import Spinner from 'components/Spinner';

function ServiceDetails() {
  const dispatch = useDispatch();
  const { serviceId } = useParams();
  const { selectedService } = useSelector((state) => state.service);
  const loading = useSelector((state) => state.async);

  useEffect(() => {
    dispatch(fetchSelectedService(serviceId));
  }, [serviceId, dispatch]);

  // loading...
  if (loading || !selectedService) return <Spinner />;

  return (
    <>
      <section className='hero is-fullheight is-default is-bold'>
        <div className='hero-body'>
          <div className='container has-text-centered'>
            <div className='columns is-vcentered'>
              <div className='column is-5'>
                <figure className='image is-4by3'>
                  <img src={selectedService.image} alt='Description' />
                </figure>
              </div>
              <div className='column is-6 is-offset-1'>
                <h1 className='title is-2'>{selectedService.title}</h1>
                <h2 className='subtitle is-4'>{selectedService.description}</h2>
                <br />
                <p className='has-text-centered'>
                  <button className='button is-medium is-info is-outlined'>Learn more</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServiceDetails;
