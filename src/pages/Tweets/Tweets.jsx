import { useState, useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { getUsers } from "../../services/UsersApi";
import { editFollowing } from "../../services/UsersApi";
import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

import { UsersList } from "../../components/UsersList/UsersList.jsx";
import { Filter } from "../../components/Filter/Filter";
import { Loader } from "../../components/Loader/Loader";
import { Button } from "../../components/Button/Button";
import { Pagination } from "../../components/Pagination/Pagination";

import * as SC from "./Tweets.styled.jsx";

const PAGES_LIMIT = 3;

export default function TweetsPage() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [followed, setFollowed] = useLocalStorage("followed", []);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isEndOfList, setIsEndOfList] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const isShowLoadMoreButton =
    filteredUsers?.length > 0 && !isLoading && !isEndOfList;

  const isShownEndOfList =
    (isEndOfList && !isLoading) || (filteredUsers.length === 0 && !isLoading);

  const isShownLoader = isLoading || (isEndOfList && isLoading);

  useEffect(() => {
    if (isFirstRender) {
      setIsEndOfList(false);
      setIsFirstRender(false);
      return;
    }
    const getUsersList = async () => {
      try {
        setIsLoading(true);
        const data = await getUsers(page * PAGES_LIMIT);
        setUsers(data);
        page * PAGES_LIMIT > data.length && setIsEndOfList(true);
      } catch (error) {
        console.log("Whoops, something went wrong ", error.message);
        return;
      } finally {
        setIsLoading(false);
      }
    };
    getUsersList();
  }, [page, followed, isFirstRender]);

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

            <Filter users={users} setFilteredUsers={setFilteredUsers} />
          </SC.ButtonsWrapper>
          <UsersList
            users={filteredUsers}
            onFollowButton={toggleFollowing}
            isFollowed={isFollowed}
          />
          {isShowLoadMoreButton && <Pagination page={page} setPage={setPage} />}
          {isShownLoader && <Loader />}
          {isShownEndOfList && (
            <SC.EndOfListText>
              {"We have nothing to show you :("}
            </SC.EndOfListText>
          )}
        </SC.Container>
      </SC.Section>
    </SC.TweetsPage>
  );
}
