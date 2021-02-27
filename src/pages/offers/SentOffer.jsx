import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSentOffers } from 'actions/offerAction';
import ServiceItem from 'components/service/ServiceItem';

const SentOffers = () => {
  const dispatch = useDispatch();
  const { sent } = useSelector((state) => state.offer);
  // const { loading } = useSelector((state) => state.async);

  useEffect(() => {
    dispatch(fetchSentOffers('fromUser', 'sent'));
  }, [dispatch]);

  return (
    <div className='container'>
      <div className='content-wrapper'>
        <h1 className='title'>Sent Offers</h1>
        <div className='columns'>
          <div className='column is-one-third'>
            {sent.map((offer) => (
              <ServiceItem noButton className='offer-card' service={offer.service} key={offer.id}>
                <div className='tag is-large'>{offer.status}</div>
                <hr />
                <div className='service-offer'>
                  <div>
                    <span className='label'>To User:</span> {offer.toUser.fullName}
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

export default SentOffers;
