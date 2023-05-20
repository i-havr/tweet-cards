import PropTypes from "prop-types";
import { Button } from "../";

export const Pagination = ({ setPage }) => {
  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return <Button actionHandler={handleLoadMore}>load more</Button>;
};

Pagination.propTypes = {
  setPage: PropTypes.func.isRequired,
};
