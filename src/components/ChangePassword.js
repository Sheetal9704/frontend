import { useState } from "react";
import axios from "axios";
import { API, BASE_URL } from "../utils.js/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils.js/userSlice";

const ChangePassword = () => {
  const dispatch = useDispatch();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState("");

  const handleSave = async () => {
    setError("");
    try {
      const res = await axios.patch(
        BASE_URL + API.CHANGE_PWD,
        { currentPassword, newPassword },
        { withCredentials: true },
      );

      setToastMessage(res.data);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);

      const updatedUser = await axios.get(BASE_URL + API.VIEW_PROFILE, {
        withCredentials: true,
      });
      dispatch(addUser(updatedUser.data.data));
    } catch (err) {
      setError(err.response?.data?.message || err.response?.data);
    }
  };
  return (
    <>
      <div className="flex justify-center items-center bg-transparent my-14">
        <div className="card bg-base-200 w-96 shadow-lg">
          <div className="card-body">
            <h2 className="card-title justify-center text-xl font-bold mb-4">
              Change Password
            </h2>

            <div className="space-y-2">
              <fieldset className="p-2">
                <legend className="font-medium px-1">Current Password</legend>
                <input
                  type="password"
                  className="input input-bordered w-full"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
              </fieldset>
              <fieldset className="p-2">
                <legend className="font-medium px-1">New Password</legend>
                <input
                  type="password"
                  className="input input-bordered w-full"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </fieldset>
            </div>
            <p className="text-red-600">{error}</p>
            <div className="card-actions mt-4">
              <button
                className="btn w-full font-semibold text-lg bg-indigo-500 hover:bg-indigo-400 text-white"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>{toastMessage}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default ChangePassword;
