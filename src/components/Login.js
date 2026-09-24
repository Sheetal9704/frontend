import { useState } from "react";
import axios from "axios";
import { API, BASE_URL } from "../utils.js/constants";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils.js/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const userData = await axios.post(
        BASE_URL + API.LOGIN,
        {
          emailId,
          password,
        },
        { withCredentials: true },
      );
      dispatch(addUser(userData?.data));
      userData && navigate("/");
    } catch (err) {
      setError(err.response?.data?.message);
    }
  };

  return (
    <div className="flex justify-center my-24 items-center bg-transparent">
      <div className="card bg-base-200 w-96 shadow-lg">
        <div className="card-body">
          <h2 className="card-title justify-center text-xl font-bold mb-6">
            Login
          </h2>

          <div className="space-y-4">
            <fieldset className="p-2">
              <legend className="font-medium px-1">Email ID</legend>
              <input
                type="text"
                className="input input-bordered w-full px-3 py-2 mt-2"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
            </fieldset>

            <fieldset className="p-2">
              <legend className="font-medium px-1">Password</legend>
              <input
                type="password"
                className="input input-bordered w-full px-3 py-2 mt-2"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </fieldset>
          </div>

          <div className="card-actions mt-6">
            <button
              className="btn w-full font-semibold text-lg bg-indigo-500 hover:bg-indigo-400 text-white"
              onClick={() => handleLogin()}
            >
              Login
            </button>
            {error && (
              <p className="text-red-400 text-md font-medium">{error}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
