import axios from "axios";
import { BASE_URL } from "../utils.js/constants";
import { useDispatch } from "react-redux";
import { removeFeedUser } from "../utils.js/feedSlice";

const UserCard = ({ user, profileView }) => {
  const dispatch = useDispatch();
  const handleSendRequest = async (status, _id) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + _id,
        {},
        { withCredentials: true },
      );
      dispatch(removeFeedUser(_id));
    } catch (err) {
      console.log(err.response?.data?.message || err.response?.data);
    }
  };
  const { firstName, lastName, age, gender, about, photoURL, _id } = user;
  return (
    <div className="card w-96 bg-base-200 shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <figure className="h-56 overflow-hidden">
        <img
          src={photoURL}
          alt="user-profile"
          className="w-auto h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        <p>
          {age ? age + "," : age} {gender}
        </p>
        <p className="break-words line-clamp-4 leading-relaxed text-sm md:text-base bg-base-200 rounded-md shadow-sm">
          {about}
        </p>
        {!profileView && (
          <div className="card-actions mt-4">
            <button
              className="btn btn-success btn-sm px-4 py-2 rounded-lg font-semibold hover:bg-green-500 transition-colors"
              onClick={() => handleSendRequest("interested", _id)}
            >
              Interested
            </button>
            <button
              className="btn btn-error btn-sm px-4 py-2 rounded-lg font-semibold hover:bg-red-500 transition-colors"
              onClick={() => handleSendRequest("ignored", _id)}
            >
              Ignore
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCard;
