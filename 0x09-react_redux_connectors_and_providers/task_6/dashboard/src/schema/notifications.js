import { normalize, schema } from 'normalizr';
import notificationsData from '../../notifications.json';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

export function notificationsNormalizer(data) {
  const normalizedData = normalize(data, [notification]);
  return {
    entities: normalizedData.entities,
    result: normalizedData.result,
  };
}

export function getAllNotificationsByUser(userId) {
  const notifications = notificationsData.filter(
    notification => notification.author.id === userId
  );
  const normalizedData = normalize(notifications, [notification]);
  return {
    entities: normalizedData.entities,
    result: normalizedData.result,
  };
}
