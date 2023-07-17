import {
  ProfileContainer,
  ProfileDescr,
  Name,
  Paragraph,
  ProfileImg,
  ProfileStat,
  ProfileStatItem,
} from './Profile.styled';
import { StatListItem } from 'components/common/ListItem/ListItem';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer>
      <ProfileDescr>
        <ProfileImg src={avatar} alt={username} />
        <Name>{username}</Name>
        <Paragraph>{tag}</Paragraph>
        <Paragraph>{location}</Paragraph>
      </ProfileDescr>

      <ProfileStat>
        {Object.entries(stats).map(([label, info], index) => {
          return <ProfileStatItem key={index} label={label} info={info} />;
        })}
      </ProfileStat>
    </ProfileContainer>
  );
};
