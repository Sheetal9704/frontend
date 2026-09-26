import { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { API, BASE_URL } from "../utils.js/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils.js/userSlice";

const EditProfile = ({ profileUser }) => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState(profileUser.firstName);
  const [lastName, setLastName] = useState(profileUser.lastName);
  const [age, setAge] = useState(profileUser.age);
  const [photoURL, setPhotoURL] = useState(profileUser.photoURL);
  const [gender, setGender] = useState(profileUser.gender);
  const [about, setAbout] = useState(profileUser.about || "");
  const [skills, setSkills] = useState(profileUser.skills);
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleEditProfile = async () => {
    setError("");
    try {
      const userData = await axios.patch(
        BASE_URL + API.EDIT_PROFILE,
        {
          firstName,
          lastName,
          age,
          gender,
          photoURL,
          about,
          skills,
        },
        { withCredentials: true },
      );
      dispatch(addUser(userData.data.data));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (err) {
      setError(err.response?.data?.message || err.response?.data);
    }
  };
  return (
    <>
      <div className="flex justify-center gap-4 my-8">
        <div className="flex justify-center items-center bg-transparent">
          <div className="card bg-base-200 w-96 shadow-lg">
            <div className="card-body">
              <h2 className="card-title justify-center text-xl font-bold mb-4">
                Edit Profile
              </h2>

              <div className="space-y-2">
                <fieldset className="p-2">
                  <legend className="font-medium px-1">First Name</legend>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </fieldset>

                <fieldset className="p-2">
                  <legend className="font-medium px-1">Last Name</legend>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </fieldset>
                <fieldset className="p-2">
                  <legend className="font-medium px-1">Photo URL</legend>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    value={photoURL}
                    onChange={(e) => setPhotoURL(e.target.value)}
                  />
                </fieldset>
                <fieldset className="p-2">
                  <legend className="font-medium px-1">Age</legend>
                  <input
                    type="number"
                    className="input input-bordered w-full"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </fieldset>
                <fieldset className="p-2">
                  <legend className="font-medium px-1">Gender</legend>
                  <div className="flex gap-4 mt-2">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={gender === "Male"}
                        onChange={(e) => setGender(e.target.value)}
                        className="radio radio-sm"
                      />
                      Male
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={gender === "Female"}
                        onChange={(e) => setGender(e.target.value)}
                        className="radio radio-sm"
                      />
                      Female
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="gender"
                        value="Others"
                        checked={gender === "Others"}
                        onChange={(e) => setGender(e.target.value)}
                        className="radio radio-sm"
                      />
                      Others
                    </label>
                  </div>
                </fieldset>
                <fieldset className="p-2">
                  <legend className="font-medium px-1">About</legend>
                  <textarea
                    className="textarea w-full"
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                  ></textarea>
                </fieldset>
                <fieldset className="p-2">
                  <legend className="font-medium px-1">Skills</legend>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    value={skills}
                    onChange={(e) =>
                      setSkills(
                        e.target.value.split(",").map((skill) => skill.trim()),
                      )
                    }
                  />
                </fieldset>
              </div>
              <p className="text-red-600">{error}</p>
              <div className="card-actions mt-4">
                <button
                  className="btn w-full font-semibold text-lg bg-indigo-500 hover:bg-indigo-400 text-white"
                  onClick={handleEditProfile}
                >
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-auto">
          <UserCard
            user={{ firstName, lastName, photoURL, age, gender, about }}
            profileView={true}
          />
        </div>
      </div>
      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Profile saved successfully.!</span>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfile;
