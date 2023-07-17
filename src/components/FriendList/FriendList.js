import { FriendUl } from './FriendList.styled';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <FriendUl>
      {friends.map(friend => {
        return <FriendListItem key={friend.id} {...friend} />;
      })}
    </FriendUl>
  );
};
