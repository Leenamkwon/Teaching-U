import { fetchSentOffers } from 'actions/offerAction';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ServiceItem from 'components/service/ServiceItem';

const ReceivedOffers = () => {
  const dispatch = useDispatch();
  const { received } = useSelector((state) => state.offer);

  useEffect(() => {
    dispatch(fetchSentOffers('receivedUser', 'received'));
  }, [dispatch]);

  return (
    <div className='container'>
      <div className='content-wrapper'>
        <h1 className='title'>Received Offers</h1>
        <div className='columns'>
          <div className='column is-one-third'>
            {received.map((offer) => (
              <ServiceItem noButton className='offer-card' service={offer.service} key={offer.id}>
                <div className='tag is-large'>{offer.status}</div>
                <hr />
                <div className='service-offer'>
                  <div>
                    <span className='label'>From User:</span> {offer.toUser.fullName}
                  </div>
                  <div>
                    <span className='label'>Note:</span> {offer.note}
                  </div>
                  <div>
                    <span className='label'>Price:</span> ${offer.price}
                  </div>
                  <div>
                    <span className='label'>Time:</span> {offer.time} hours
                  </div>
                </div>
              </ServiceItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceivedOffers;
