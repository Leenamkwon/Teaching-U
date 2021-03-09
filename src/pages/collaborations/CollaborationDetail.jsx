import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router';
import { subToCollaboration } from 'actions/collaborationAction';
import { useDispatch, useSelector } from 'react-redux';

export default function CollaborationDetail() {
  const { collaboration, joined, messages } = useSelector((state) => state.collaboration);
  const dispatch = useDispatch();
  const { id } = useParams();
  const unsubscribe = useRef(null);

  useEffect(() => {
    unsubscribe.current = dispatch(subToCollaboration(id));
  }, [dispatch, id]);

  useEffect(() => {
    return () => {
      unsubscribe.current();
    };
  }, []);

  return (
    <div className='content-wrapper'>
      <div className='root'>
        {/* Body */}
        <div className='body'>
          <div className='viewListUser'>
            <div className='viewWrapItem'>
              <img className='viewAvatarItem' src='https://i.imgur.com/cVDadwb.png' alt='icon avatar' />
              <div className='viewWrapContentItem'>
                <span className='textItem'>Nickname: Filip Jerga</span>
                <span className='textItem'>online</span>
              </div>
            </div>
          </div>
          <div className='viewBoard'>
            <div className='viewChatBoard'>
              <div className='headerChatBoard'>
                <img className='viewAvatarItem' src='https://i.imgur.com/cVDadwb.png' alt='icon avatar' />
                <span className='textHeaderChatBoard'>Filip Jerga</span>
              </div>
              <div className='viewListContentChat'>
                <div className='viewWrapItemLeft'>
                  <div className='viewWrapItemLeft3'>
                    <img src='https://i.imgur.com/cVDadwb.png' alt='avatar' className='peerAvatarLeft' />
                    <div className='viewItemLeft'>
                      <span className='textContentItem'>hey</span>
                    </div>
                  </div>
                  <span className='textTimeLeft'>Oct 31, 2019</span>
                </div>
                <div className='viewItemRight'>
                  <span className='textContentItem'>hey</span>
                </div>
                <div style={{ float: 'left', clear: 'both' }}></div>
              </div>
              <div className='viewBottom'>
                <input className='viewInput' placeholder='Type your message...' value='' onChange={() => {}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
