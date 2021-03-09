import { markMessageAsRead } from 'actions/collaborationAction';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function ReceivedMessage() {
  const dispatch = useDispatch();
  const { messages } = useSelector((state) => state.auth);
  const history = useHistory();

  function goToCollaboration(message) {
    markMessageAsRead(message);
    history.push(`${message.cta}`);
  }

  function renderMessage() {
    if (messages.filter((msg) => !msg.isRead).length === 0) {
      return <div className='navbar-item'>No Message</div>;
    }

    return messages
      .filter((msg) => !msg.isRead)
      .map((msg, idx) => (
        <div key={msg.id}>
          {idx === 0 ? null : <hr />}
          <div className='from-user'>
            <span>From: </span>
            {msg.fromUser.name}
          </div>
          <div className='navbar-item navbar-item-messages'>
            {msg.text}
            <div style={{ display: 'block' }}>
              <button onClick={() => goToCollaboration(msg)}>
                <div className='button is-success'>Join</div>
              </button>
              <button onClick={() => dispatch(markMessageAsRead(msg))} className='button is-warning'>
                Later
              </button>
            </div>
          </div>
        </div>
      ));
  }

  return renderMessage();
}
