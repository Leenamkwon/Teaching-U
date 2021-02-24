import React, { useState } from 'react';

const Modal = ({ openButtonText, children, onModalSubmit }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <button
        type='button'
        className='button is-medium is-info is-outlined'
        data-toggle='modal'
        data-target='#exampleModal'
        onClick={() => setIsActive(true)}
      >
        {openButtonText || 'Open'}
      </button>
      <div className={`modal ${isActive && 'is-active'}`}>
        <div className='modal-background' onClick={() => setIsActive(false)}></div>
        <div className='modal-card'>
          <header className='modal-card-head'>
            <p className='modal-card-title'>Make a Deal</p>
            <button onClick={() => setIsActive(false)} className='delete' aria-label='close'></button>
          </header>
          <section className='modal-card-body'>{children}</section>
          <footer className='modal-card-foot'>
            <button onClick={onModalSubmit ? () => onModalSubmit : null} className='button is-success'>
              Save changes
            </button>
            <button className='button' onClick={() => setIsActive(false)}>
              Cancel
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Modal;
