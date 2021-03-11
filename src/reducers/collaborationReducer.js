import {
  SET_COLLABORATION,
  SET_COLLABORATION_JOINED_PEOPLE,
  SET_COLLABORATION_MESSAGE,
} from 'actions/collaborationConstants';
import { combineReducers } from 'redux';

const initCollaboraions = () => {
  const collaboration = (state = null, { type, payload }) => {
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
      case 'LEFT_COLLABORATION':
        const clone = state.filter((item) => item.uid !== payload);
        return clone;
      default:
        return state;
    }
  };

  const messages = (state = [], { type, payload }) => {
    switch (type) {
      case SET_COLLABORATION_MESSAGE:
        return [...state, ...payload];
      case 'LEFT_COLLABORATION':
        return [];
      default:
        return state;
    }
  };

  return combineReducers({
    collaboration,
    joinedPeople: joinedPeople,
    messages,
  });
};

export default initCollaboraions;
