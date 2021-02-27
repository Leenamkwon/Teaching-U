import firebase from '../config/firebase';

export const createCollaboration = ({ offer: { service, time, toUser, id }, fromUser }) => ({
  serviceId: service.id, // define ID on offer.service
  title: service.title,
  image: service.image,
  time: time * 60 * 60,
  allowedPeople: [fromUser.uid, toUser.uid],
  joined: [],
  toUser: toUser.uid,
  fromOffer: id, // 게시물 올린 사람
  fromUser: fromUser.uid, // 신청하는 사람
  createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
});

export const createMessage = ({ offer: { service, toUser }, fromUser }) => ({
  isRead: false,
  type: 'invitation',
  text: `Hello ${toUser.fullName}, please join collaboration as soon as possible`,
  cta: '',
  toUser: toUser.uid, // 메세지를 받는 사람
  fromUser: {
    // 메세지를 보내는 사람
    name: fromUser.fullName,
    avatar: fromUser.avatar,
  },
  serviceTitle: service.title,
  serviceLink: `/services/${service.id}`,
  createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
});
