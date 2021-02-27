import { changeOfferStatus, fetchSentOffers } from 'actions/offerAction';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ServiceItem from 'components/service/ServiceItem';

const ReceivedOffers = () => {
  const dispatch = useDispatch();
  const { received } = useSelector((state) => state.offer);

  useEffect(() => {
    dispatch(fetchSentOffers('toUser', 'received'));
  }, [dispatch]);

  function acceptOffer(offer) {
    dispatch(changeOfferStatus(offer, 'accepted'));
  }

  function declineOffer(offer) {
    dispatch(changeOfferStatus(offer, 'declined'));
  }

  function statusClass(status) {
    if (status === 'pending') return 'is-warning';
    if (status === 'accepted') return 'is-success';
    if (status === 'declined') return 'is-danger';
  }

  return (
    <div className='container'>
      <div className='content-wrapper'>
        <h1 className='title'>Received Offers</h1>
        <div className='columns'>
          <div className='column is-one-third'>
            {received.map((offer) => (
              <ServiceItem noButton={true} className='offer-card' service={offer.service} key={offer.id}>
                <div className={`tag is-large ${statusClass(offer.status)}`}>{offer.status}</div>
                <hr />
                <div className='service-offer'>
                  <div>
                    <span className='label'>From User:</span> {offer.fromUser.fullName}
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
                {offer.status === 'pending' && (
                  <div>
                    <hr />
                    <button onClick={() => acceptOffer(offer)} className='button is-success s-m-r'>
                      Accept
                    </button>
                    <button onClick={() => declineOffer(offer)} className='button is-danger'>
                      Decline
                    </button>
                  </div>
                )}
              </ServiceItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceivedOffers;
