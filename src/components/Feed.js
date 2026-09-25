import { useEffect, useState } from "react";
import { API, BASE_URL } from "../utils.js/constants";
import UserCard from "./UserCard";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addFeedUser } from "../utils.js/feedSlice";

const Feed = () => {
  const dispatch = useDispatch();
  const loggedInuser = useSelector((store) => store.user);
  const feedUsers = useSelector((store) => store.feed);

  const getFeedUsers = async () => {
    try {
      const users = await axios.get(BASE_URL + API.FEED, {
        withCredentials: true,
      });
      dispatch(addFeedUser(users.data));
    } catch (err) {
      console.error(err.response.data);
    }
  };

  useEffect(() => {
    if (!feedUsers && loggedInuser) {
      getFeedUsers();
    }
  }, []);

  if (!feedUsers) return;

  if (feedUsers.length === 0) {
    return <h3>No New Users Found!</h3>;
  }
  return <UserCard user={feedUsers[0]} />;
};

export default Feed;
