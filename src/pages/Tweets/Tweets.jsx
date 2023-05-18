import { useState, useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { getUsers } from "../../services/UsersApi";
import { editFollowing } from "../../services/UsersApi";
import { HiArrowLeft, HiOutlineFilter } from "react-icons/hi";
import { Link } from "react-router-dom";

import { UsersList } from "../../components/UsersList/UsersList.jsx";
import { Button } from "../../components/Button/Button";
import { Pagination } from "../../components/Pagination/Pagination";

import * as SC from "./Tweets.styled.jsx";

const PAGES_LIMIT = 3;

export default function TweetsPage() {
  const [users, setUsers] = useState(null);
  const [followed, setFollowed] = useLocalStorage("followed", []);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
  }, []);

  useEffect(() => {
    if (currentPage === 1) {
      return;
    }

    const getUsersList = async () => {
      try {
        const data = await getUsers(currentPage, PAGES_LIMIT);
        setUsers((prev) => (prev ? [...prev, ...data] : [...data]));
      } catch (error) {
        console.log("Whoops, something went wrong ", error.message);
        return;
      }
    };
    getUsersList();
  }, [currentPage, followed, isFirstRender]);

  const isFollowed = (id) => followed.includes(id);

  const toggleFollowing = async (id) => {
    const user = users.find((user) => user.id === id);

    const body = isFollowed(id)
      ? { ...user, followers: user.followers - 1 }
      : { ...user, followers: user.followers + 1 };

    try {
      await editFollowing(id, body);
      isFollowed(id)
        ? setFollowed((prev) => [...prev.filter((elem) => elem !== id)])
        : setFollowed((prev) => [...prev, id]);
      localStorage.setItem("followed", JSON.stringify(followed));
    } catch (error) {
      console.log("Whoops, something went wrong ", error.message);
    }
  };

  return (
    <SC.TweetsPage>
      <SC.Section>
        <SC.Container>
          <SC.ButtonsWrapper>
            <Link style={{ textDecoration: "none" }} to="/">
              <Button>
                <HiArrowLeft size="14" />
                {"\u202f"} Go back
              </Button>
            </Link>
            <Button>
              {" "}
              <HiOutlineFilter size="14" />
              {"\u202f"} Filter
            </Button>
          </SC.ButtonsWrapper>
          <UsersList
            users={users}
            onFollowButton={toggleFollowing}
            isFollowed={isFollowed}
          />
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </SC.Container>
      </SC.Section>
    </SC.TweetsPage>
  );
}
