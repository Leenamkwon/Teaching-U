import React from 'react';

export default function DisplayJoinedPeople({ users }) {
  if (!users?.length > 0) return null;

  return (
    <>
      {users.map((people, index) => (
        <div className='viewWrapItem' key={index}>
          <img className='viewAvatarItem' src={people.avatar} alt='icon avatar' />
          <div className='viewWrapContentItem'>
            <span className='textItem'>{people.fullName}</span>
            <span className='textItem'>{people.state}</span>
          </div>
        </div>
      ))}
    </>
  );
}
