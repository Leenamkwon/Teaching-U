import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSentOffers } from 'actions/offerAction';
import ServiceItem from 'components/service/ServiceItem';
import { createCollaboration, createMessage } from '../../utils/offer';
import { collaboration } from 'actions/collaborationAction';
import { useToasts } from 'react-toast-notifications';

const SentOffers = () => {
  const dispatch = useDispatch();
  const { sent } = useSelector((state) => state.offer);
  const { currentUser } = useSelector((state) => state.auth);
  const { addToast } = useToasts();

  useEffect(() => {
    dispatch(fetchSentOffers('fromUser', 'sent'));
  }, [dispatch]);

  async function handleCollaboration(offer) {
    try {
      const collaborationData = createCollaboration({ offer, fromUser: currentUser });
      const messageData = createMessage({ offer, fromUser: currentUser });
      dispatch(collaboration({ collaboration: collaborationData, message: messageData }));
      addToast('콜라보레이션', { appearance: 'success', autoDismiss: true });
    } catch (error) {
      addToast(error.message, { autoDismiss: true });
    }
  }

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
                {offer.status === 'accepted' && !offer.collaborationCreated && (
                  <div>
                    <hr />
                    <button onClick={() => handleCollaboration(offer)} className='button is-success'>
                      Collaborate
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

export default SentOffers;
