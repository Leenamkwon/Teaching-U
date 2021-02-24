import Modal from 'components/common/Modal';
import React, { useState } from 'react';

export default function OffserModal({ service }) {
  const [offer, setOffer] = useState({
    fromUser: '',
    toUser: '',
    serviceId: '',
    status: 'pending',
    price: 0,
    time: 0,
    note: '',
  });

  function handleChange({ target: { value, name } }) {
    if (name === 'time') {
      const price = Math.round(value * service.price * 100) / 100;
      return setOffer((prev) => ({ ...prev, time: name, price }));
    }
    return setOffer((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit() {
    alert(JSON.stringify(offer));
  }

  return (
    <Modal onModalSubmit={handleSubmit} openButtonText='Make an Offer'>
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
        <div className='service-price-title'>Uppon acceptance "Filip Jerga" will charge you:</div>
        <div className='service-price-value'>
          <h1 className='title'>{offer.price}</h1>
        </div>
      </div>
    </Modal>
  );
}
