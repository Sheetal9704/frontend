import axios from "axios";
import UserLists from "./UserLists";
import { API, BASE_URL } from "../utils.js/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "../utils.js/requestSlice";

const ConnectionRequest = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.requests);

  const getConnectionRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + API.CONN_REQ, {
        withCredentials: true,
      });
      console.log(res.data);
      dispatch(addRequests(res.data.data));
    } catch (err) {
      console.log(err.response?.data || err.response?.data?.message);
    }
  };

  useEffect(() => {
    getConnectionRequests();
  }, []);

  if (!requests) return;

  if (requests.length === 0) {
    return <h1 className="text-lg text-center mt-14">No New Requests!</h1>;
  }

  return (
    <div>
      <UserLists
        connections={requests.map((req) => {
          const { _id, ...rest } = req.fromUserId;
          return {
            _id: req._id,
            status: req.status,
            userId: _id,
            ...rest,
          };
        })}
        showBtn={true}
      />
    </div>
  );
};

export default ConnectionRequest;
