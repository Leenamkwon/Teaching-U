import React, { useEffect, useRef, useState } from 'react';
import { Redirect, useParams } from 'react-router';
import { joinCollaboration, leftCollaboration, subToCollaboration } from 'actions/collaborationAction';
import { useDispatch, useSelector } from 'react-redux';
import DisplayJoinedPeople from './DisplayJoinedPeople';
import { sendMessageAction, subscribeToMessageAction } from 'actions/messageAction';
import moment from 'moment';
import ChatMessage from './ChatMessage';

export default function CollaborationDetail() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { collaboration, joinedPeople, messages } = useSelector((state) => state.collaboration);
  const { currentUser } = useSelector((state) => state.auth);
  const { error } = useSelector((state) => state.async);
  const { id } = useParams();
  const unsubscribe = useRef(null);
  const messageUnsubscribe = useRef(null);
  const [message, setMessage] = useState({ inputValue: '' });

  useEffect(() => {
    async function asd() {
      await joinCollaboration(id, currentUser.uid);
      unsubscribe.current = dispatch(subToCollaboration(id));
      messageUnsubscribe.current = dispatch(subscribeToMessageAction(id));
      setLoading(false);
    }
    asd();

    return () => {
      dispatch(leftCollaboration(id, currentUser.uid));
      unsubscribe.current();
      messageUnsubscribe.current();
    };
  }, [currentUser.uid, dispatch, id]);

  async function onSendMessage(inputValue) {
    if (inputValue.trim() === '') return;

    const timeStamp = moment().valueOf().toString();
    const message = {
      user: {
        uid: currentUser.uid,
        avatar: currentUser.avatar,
        name: currentUser.fullName,
      },
      timestamp: parseInt(timeStamp, 10),
      content: inputValue.trim(),
    };

    await sendMessageAction(message, id);
    setMessage({ inputValue: '' });
  }

  // LOADING || ERROR
  if (error && !collaboration && !loading) return <Redirect to='/' />;
  if (!error && !collaboration && loading) return <div></div>;

  return (
    <div className='content-wrapper'>
      <div className='root'>
        {/* Body */}
        <h1>{collaboration?.title}</h1>
        <div className='body'>
          <div className='viewListUser'>
            <DisplayJoinedPeople users={joinedPeople} />
          </div>
          <div className='viewBoard'>
            <div className='viewChatBoard'>
              <div className='headerChatBoard'>
                <img className='viewAvatarItem' src='https://i.imgur.com/cVDadwb.png' alt='icon avatar' />
                <span className='textHeaderChatBoard'>Filip Jerga</span>
              </div>
              <div className='viewListContentChat'>
                <ChatMessage messages={messages} currentUser={currentUser} />
                <div style={{ float: 'left', clear: 'both' }}></div>
              </div>
              <div className='viewBottom'>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    onSendMessage(message.inputValue);
                  }}
                >
                  <input
                    className='viewInput'
                    value={message.inputValue}
                    placeholder='Type your message...'
                    onChange={(e) => setMessage({ inputValue: e.target.value })}
                  />
                  <button type='submit' className='button is-primary is-medium'>
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
