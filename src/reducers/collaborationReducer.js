import { SET_COLLABORATION, SET_COLLABORATION_JOINED_PEOPLE } from 'actions/collaborationConstants';
import { combineReducers } from 'redux';

const initCollaboraions = () => {
  const collaboration = (state = {}, { type, payload }) => {
    switch (type) {
      case SET_COLLABORATION:
        return payload;

      default:
        return state;
    }
  };

  const joinedPeople = (state = [], { type, payload }) => {
    switch (type) {
      case SET_COLLABORATION_JOINED_PEOPLE:
        return payload;

      default:
        return state;
    }
  };

  const messages = (state = [], { type, payload }) => {
    return {};
  };

  return combineReducers({
    collaboration,
    joined: joinedPeople,
    messages,
  });
};

export default initCollaboraions;
