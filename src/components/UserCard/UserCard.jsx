import PropTypes from "prop-types";

import { CardButton } from "../CardButton/CardButton";
import { separateNumbers } from "../../helpers/separateNumbers";
import dialogueClouds from "../../assets/svg/dialogue-clouds.svg";
import goitLogo from "../../assets/svg/goit-logo.svg";

import * as SC from "./UserCard.styled";

export const UserCard = ({ user, onFollowButton, isFollowed }) => {
  if (user) {
    const { id, user: name, avatar, tweets, followers } = user;

    return (
      <SC.UserCard>
        <SC.GoitLogo src={goitLogo} />
        <SC.DialogueClouds src={dialogueClouds} />
        <SC.CenterLine />
        <SC.AvatarFrame>
          <SC.AvatarWrapper>
            <SC.Avatar src={avatar} alt={name} title={name} />
          </SC.AvatarWrapper>
          <SC.EmptyAvatarLayer />
        </SC.AvatarFrame>
        <SC.TweetsNumber>{tweets} tweets</SC.TweetsNumber>
        <SC.FollowersNumber>
          {separateNumbers(followers)} followers
        </SC.FollowersNumber>
        <CardButton
          actionHandler={() => onFollowButton(id)}
          isFollowed={isFollowed(id)}
        />
      </SC.UserCard>
    );
  }
};

UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
  }),
  onFollowButton: PropTypes.func.isRequired,
  isFollowed: PropTypes.func.isRequired,
};
