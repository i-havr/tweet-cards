import { useState, useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { getUsers } from "../../services/UsersApi";
import { editFollowing } from "../../services/UsersApi";
import { HiArrowLeft, HiOutlineFilter } from "react-icons/hi";
import { Link } from "react-router-dom";

import { UsersList } from "../../components/UsersList/UsersList.jsx";
import { Loader } from "../../components/Loader/Loader";
import { Button } from "../../components/Button/Button";
import { Pagination } from "../../components/Pagination/Pagination";

import * as SC from "./Tweets.styled.jsx";

const PAGES_LIMIT = 3;

export default function TweetsPage() {
  const [users, setUsers] = useState([]);
  const [followed, setFollowed] = useLocalStorage("followed", []);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isEndOfList, setIsEndOfList] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const isShowLoadMoreButton = users?.length > 0 && !isLoading && !isEndOfList;

  const isShownEndOfList = isEndOfList && !isLoading;
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
    console.log(id);
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
          {isShowLoadMoreButton && <Pagination page={page} setPage={setPage} />}
          {isShownLoader && <Loader />}
          {isShownEndOfList && (
            <SC.EndOfListText>{"End of list :("}</SC.EndOfListText>
          )}
        </SC.Container>
      </SC.Section>
    </SC.TweetsPage>
  );
}
