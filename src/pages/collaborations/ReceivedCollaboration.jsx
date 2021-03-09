import { fetchCollaborations } from 'actions/collaborationAction';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { Link } from 'react-router-dom';

function ReceivedCollaboration() {
  const dispatch = useDispatch();
  const [collaborations, setCollaborations] = useState([]);
  const { currentUser } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchCollaborations(currentUser.uid)).then((collaboration) => setCollaborations(collaboration));
  }, [currentUser.uid, dispatch]);

  return (
    <div className='content-wrapper'>
      <div className='container'>
        <h1 className='title'>Collaborations</h1>
        <div className='box content'>
          {collaborations.map((c) => (
            <article className='post' key={c.id}>
              <h4>{c.title}</h4>
              <div className='media'>
                <div className='media-left'>
                  <p className='image is-32x32'>
                    <img src={c.image} alt={c.title} />
                  </p>
                </div>
                <div className='media-content'>
                  <div className='content'>
                    <p>
                      <span href='#'>{c.fromUser.name}</span> replied {moment(c.createdAt.toDate()).fromNow()} &nbsp;
                      <span className='tag'>{c.status}</span>
                    </p>
                  </div>
                </div>
                <div className='media-right'>
                  <span className='has-text-grey-light'>
                    <Link to={`/collaborations/${c.id}`}>
                      <button className='button'>Enter</button>
                    </Link>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReceivedCollaboration;
