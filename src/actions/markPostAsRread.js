import { READ, UNREAD } from '../constants'

export function markPostAsRread(id) {
  console.log('markPostAsRread',id);
  return {
    type: READ,
    post_id: id
  }
}

export function markPostAsUnread(id) {
  console.log('markPostAsUnread',id);
  return {
    type: UNREAD,
    post_id: id
  }
}
