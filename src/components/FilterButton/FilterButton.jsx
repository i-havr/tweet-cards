import PropTypes from "prop-types";
import * as SC from "./FilterButton.styled";

export const FilterButton = ({ children }) => {
  return <SC.FilterButton type="button">{children}</SC.FilterButton>;
};

FilterButton.propTypes = {
  children: PropTypes.node.isRequired,
};
