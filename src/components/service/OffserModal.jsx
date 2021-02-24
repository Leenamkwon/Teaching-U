import { createOffer } from 'actions/offerAction';
import Modal from 'components/common/Modal';
import { createRef } from 'firestore/firestoreService';
import React, { useState } from 'react';
import { useToasts } from 'react-toast-notifications';

export default React.memo(function OffserModal({ service, serviceByUser, currentUser }) {
  const { addToast } = useToasts();
  const [loading, setLoading] = useState(false);
  const [offer, setOffer] = useState({
    fromUser: '',
    toUser: '',
    service: '',
    status: 'pending',
    note: '',
    time: 0,
    price: 0,
  });

  function handleChange({ target: { value, name } }) {
    if (name === 'time') {
      const price = Math.round(value * service.price * 100) / 100;
      return setOffer((prev) => ({ ...prev, time: name, price }));
    }
    return setOffer((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit() {
    const offerCopy = { ...offer };
    setLoading(true);
    try {
      offerCopy.fromUser = createRef('user', currentUser.uid);
      offerCopy.toUser = createRef('user', service.hostedId);
      offerCopy.service = createRef('services', service.id);
      await createOffer(offerCopy);
      addToast('Offer Success', { appearance: 'success', autoDismiss: true });
      setLoading(false);
    } catch (error) {
      addToast(error.message, { appearance: 'error', autoDismiss: true });
      setLoading(false);
    }
  }

  return (
    <Modal onModalSubmit={handleSubmit} openButtonText='Make an Offer' loading={loading}>
      <div className='field'>
        <input
          name='note'
          onChange={handleChange}
          className='input is-large'
          type='text'
          placeholder='Write some catchy note'
          max='5'
          min='0'
          autoFocus={true}
        />
        <p className='help'>Note can increase chance of getting the service</p>
      </div>
      <div className='field'>
        <input
          name='time'
          onChange={handleChange}
          className='input is-large'
          type='number'
          placeholder='How long you need service for ?'
          max='5'
          min='0'
          autoFocus={true}
        />
        <p className='help'>Enter time in hours</p>
      </div>
      <div className='service-price has-text-centered'>
        <div className='service-price-title'>{`Uppon acceptance ${
          serviceByUser?.fullName || 'Bot'
        } will charge you:`}</div>
        <div className='service-price-value'>
          <h1 className='title'>{offer.price}</h1>
        </div>
      </div>
    </Modal>
  );
});
