import moment from 'moment';
import React from 'react';

export default function ChatMessage({ messages, currentUser }) {
  function renderMessages() {
    if (messages.length > 0) {
      return messages.map((message, i) => {
        // Message is from currently logged in USER
        if (message.user.id === currentUser.uid) {
          return (
            <div key={message.timestamp} className='viewWrapItemLeft'>
              <div className='viewWrapItemLeft3'>
                <img src={message.user.avatar} alt='avatar' className='peerAvatarLeft' />
                <div className='viewItemLeft'>
                  <span className='textContentItem'>{message.content}</span>
                </div>
              </div>
              <span className='textTimeLeft'>{moment(message.timestamp).fromNow()}</span>
            </div>
          );
        }

        return (
          <div key={message.timestamp} className='viewWrapItemRight'>
            <div className='viewWrapItemRight3'>
              <img src={message.user.avatar} alt='avatar' className='peerAvatarLeft' />
              <div className='viewItemRight'>
                <span className='textContentItem'>{message.content}</span>
              </div>
            </div>
            <span className='textTimeLeft'>{moment(message.timestamp).fromNow()}</span>
          </div>
        );
      });
    }

    return null;
  }

  return (
    <div className='viewListContentChat'>
      {renderMessages()}
      <div style={{ float: 'left', clear: 'both' }}></div>
    </div>
  );
}
