import { fetchServiceById, resetPreviousService } from 'actions';
import Spinner from 'components/Spinner';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function ServiceDetails() {
  const { serviceId } = useParams();
  const dispatch = useDispatch();
  const serviceDetail = useSelector((state) => state.selectedService);
  const loading = useSelector((state) => state.request);

  useEffect(() => {
    dispatch(fetchServiceById(serviceId));
  }, [serviceId, dispatch]);

  if ((loading && !serviceDetail.id) || serviceId !== serviceDetail.id)
    return <Spinner />;

  return (
    <>
      <section className='hero is-fullheight is-default is-bold'>
        <div className='hero-body'>
          <div className='container has-text-centered'>
            <div className='columns is-vcentered'>
              <div className='column is-5'>
                <figure className='image is-4by3'>
                  <img src={serviceDetail.image} alt='Description' />
                </figure>
              </div>
              <div className='column is-6 is-offset-1'>
                <h1 className='title is-2'>{serviceDetail.title}</h1>
                <h2 className='subtitle is-4'>{serviceDetail.description}</h2>
                <br />
                <p className='has-text-centered'>
                  <button className='button is-medium is-info is-outlined'>
                    Learn more
                  </button>
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
