import EditProfile from "./EditProfile";
import { useSelector } from "react-redux";

const Profile = () => {
  const profileUser = useSelector((store) => store.user);

  return <div>{profileUser && <EditProfile profileUser={profileUser} />}</div>;
};

export default Profile;
