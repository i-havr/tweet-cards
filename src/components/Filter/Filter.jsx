import { useState, useEffect } from "react";
import { HiOutlineFilter } from "react-icons/hi";
import PropTypes from "prop-types";
import { getLinkStyle } from "../../helpers";
import { FilterButton } from "../";

import * as SC from "./Filter.styled";

export const Filter = ({ users, setFilteredUsers }) => {
  const [filterName, setFilterValue] = useState("showAll");

  useEffect(() => {
    const followedUsers = JSON.parse(localStorage.getItem("followed")) || [];

    if (filterName === "showAll") {
      setFilteredUsers(users);
    } else if (filterName === "follow") {
      const notFollowedUsers = users.filter(
        (user) => !followedUsers.includes(user.id)
      );
      setFilteredUsers(notFollowedUsers);
    } else if (filterName === "followings") {
      const followedUsersData = users.filter((user) =>
        followedUsers.includes(user.id)
      );
      setFilteredUsers(followedUsersData);
    }
  }, [filterName, setFilteredUsers, users]);

  const handleFilterChange = (e) => {
    setFilterValue(e.target.name);
  };
  return (
    <SC.FilterWrapper>
      <FilterButton>
        {" "}
        <HiOutlineFilter size="14" />
        {"\u202f"} Filter
      </FilterButton>

      <SC.DropDownContent>
        <SC.DropDownContentLink
          style={getLinkStyle(filterName, "showAll")}
          name="showAll"
          onClick={handleFilterChange}
        >
          Show All
        </SC.DropDownContentLink>
        <SC.DropDownContentLink
          style={getLinkStyle(filterName, "follow")}
          name="follow"
          onClick={handleFilterChange}
        >
          Follow
        </SC.DropDownContentLink>
        <SC.DropDownContentLink
          style={getLinkStyle(filterName, "followings")}
          name="followings"
          onClick={handleFilterChange}
        >
          Followings
        </SC.DropDownContentLink>
      </SC.DropDownContent>
    </SC.FilterWrapper>
  );
};

Filter.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      tweets: PropTypes.number.isRequired,
      followers: PropTypes.number.isRequired,
    })
  ),
  setFilteredUsers: PropTypes.func.isRequired,
};
