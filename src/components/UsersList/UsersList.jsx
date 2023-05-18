import PropTypes from "prop-types";
import { UserCard } from "../UserCard/UserCard";

import * as SC from "./UsersList.styled";

export const UsersList = ({ users, onFollowButton, isFollowed }) => {
  if (users) {
    return (
      <SC.UsersList>
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onFollowButton={onFollowButton}
            isFollowed={isFollowed}
          />
        ))}
      </SC.UsersList>
    );
  }
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      tweets: PropTypes.number.isRequired,
      followers: PropTypes.number.isRequired,
    })
  ),
  onFollowButton: PropTypes.func,
  isFollowed: PropTypes.func,
};
