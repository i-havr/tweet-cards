import PropTypes from "prop-types";
import { Button } from "../Button/Button";

// import * as SC from "./Pagination.styled";

export const Pagination = ({ setCurrentPage }) => {
  const handleLoadMore = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return <Button actionHandler={handleLoadMore}>load more</Button>;
};

Pagination.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
};
