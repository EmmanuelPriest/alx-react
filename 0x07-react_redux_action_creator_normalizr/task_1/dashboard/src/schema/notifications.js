import { normalize, schema } from 'normalizr';
import * as notificationsData from '../notifications.json';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

export function getAllNotificationsByUser(userId) {
  const notifications = notificationsData.default.filter(
    notification => notification.author.id === userId
  );
  return normalize(notifications, [notification]);
}
