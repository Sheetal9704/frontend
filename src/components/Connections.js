import axios from "axios";
import UserLists from "./UserLists";
import { API, BASE_URL } from "../utils.js/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils.js/connectionSlice";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections);

  const getConnections = async () => {
    try {
      const connection = await axios.get(BASE_URL + API.CONNECTIONS, {
        withCredentials: true,
      });
      dispatch(addConnections(connection.data.data));
    } catch (err) {
      console.log(err.response?.data || err.response?.data?.message);
    }
  };

  useEffect(() => {
    getConnections();
  }, []);

  if (!connections) return;

  if (connections.length === 0) {
    return <h1 className="text-lg text-center mt-14">No New Connections!</h1>;
  }

  return (
    <div>
      <UserLists connections={connections} />
    </div>
  );
};

export default Connections;
