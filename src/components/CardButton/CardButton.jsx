import PropTypes from "prop-types";
import * as SC from "./CardButton.styled";

export const CardButton = ({ actionHandler, isFollowed }) => {
  return (
    <SC.CardButton
      onClick={actionHandler}
      style={{ backgroundColor: isFollowed ? "#5CD3A8" : "#EBD8FF" }}
      type="button"
    >
      {isFollowed ? "following" : "follow"}
    </SC.CardButton>
  );
};

CardButton.propTypes = {
  actionHandler: PropTypes.func.isRequired,
  isFollowed: PropTypes.bool.isRequired,
};
