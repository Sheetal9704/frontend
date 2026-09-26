import axios from "axios";
import { BASE_URL } from "../utils.js/constants";
import { useDispatch } from "react-redux";
import { deleteRequest } from "../utils.js/requestSlice";

const UserLists = ({ connections, showBtn }) => {
  const dispatch = useDispatch();
  const handleReviewRequest = async (status, _id) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true },
      );
      dispatch(deleteRequest(_id));
    } catch (err) {
      console.log(err.response?.data?.message || err.response?.data);
    }
  };
  return (
    <div>
      <h2 className="font-semibold text-center text-2xl mt-4 p-2">
        {showBtn ? "Connection Requests" : "Connections"}
      </h2>

      <div className="flex flex-col items-center gap-4 mt-4">
        {connections.map((connection) => (
          <div
            key={connection._id}
            className="flex items-center gap-4 bg-base-200 rounded-xl shadow-md p-4 w-3/5 hover:shadow-lg transition-shadow duration-300"
          >
            <img
              className="w-16 h-16 rounded-full object-cover"
              alt="profile"
              src={connection.photoURL}
            />
            <div className="flex-1">
              <div className="font-semibold text-lg">
                {connection.firstName + " " + connection.lastName}
              </div>
              <div className="text-xs font-semibold">
                {connection.age} {connection.gender}
              </div>
              <p className="text-xs mt-1 break-words">{connection.about}</p>
            </div>
            {showBtn && (
              <div className="flex flex-col gap-2 justify-center">
                <button
                  className="btn btn-sm btn-success"
                  onClick={() =>
                    handleReviewRequest("accepted", connection._id)
                  }
                >
                  Accept
                </button>
                <button
                  className="btn btn-sm btn-error"
                  onClick={() =>
                    handleReviewRequest("rejected", connection._id)
                  }
                >
                  Reject
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserLists;
