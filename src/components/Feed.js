import { useEffect } from "react";
import { API, BASE_URL } from "../utils.js/constants";
import UserCard from "./UserCard";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addFeedUser } from "../utils.js/feedSlice";

const Feed = () => {
  const dispatch = useDispatch();
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
    getFeedUsers();
  }, []);

  if (!feedUsers) return;

  if (feedUsers.length === 0) {
    return <h1 className="text-lg text-center mt-14">No New Users Found!</h1>;
  }
  return (
    <div className="flex justify-center my-12">
      <UserCard user={feedUsers[0]} />
    </div>
  );
};

export default Feed;
