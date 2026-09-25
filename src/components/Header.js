import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { API, BASE_URL } from "../utils.js/constants";
import { removeUser } from "../utils.js/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { deleteFeed } from "../utils.js/feedSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleLogout = async () => {
    try {
      await axios.get(BASE_URL + API.LOGOUT, { withCredentials: true });
      dispatch(removeUser());
      dispatch(deleteFeed());
      navigate(API.LOGIN);
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <div>
      <div className="navbar bg-base-200 shadow-sm">
        <div className="flex-1">
          <Link to={user ? "/" : "/login"} className="btn text-xl">
            DevTinder
          </Link>
        </div>
        {user && (
          <div className="flex gap-2 mx-6">
            <div>
              <p> Welcome {user.firstName}!</p>
            </div>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-circle avatar">
                <div className="w-8 rounded-full">
                  <img alt="user-profile" src={user?.photoURL} />
                </div>
              </div>
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/connections">Connections</Link>
                </li>
                <li>
                  <Link to="/requests">Connection Requests</Link>
                </li>
                <li>
                  <Link to="/changePassword">Change Password</Link>
                </li>
                <li onClick={() => handleLogout()}>
                  <Link>Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
