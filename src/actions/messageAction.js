import { sendMessage, subscribeMessage } from 'firestore/messageFirebase';
import { SET_COLLABORATION_MESSAGE } from './collaborationConstants';

export const sendMessageAction = (message, collabId) => {
  return sendMessage(message, collabId);
};

export const subscribeToMessageAction = (collabId) => (dispatch) =>
  subscribeMessage(collabId, (message) => {
    const extractMessage = [];
    message.forEach((item) => {
      if (item.type === 'added') {
        extractMessage.push({ ...item.doc.data() });
      }
    });
    dispatch({ type: SET_COLLABORATION_MESSAGE, payload: extractMessage });
  });
