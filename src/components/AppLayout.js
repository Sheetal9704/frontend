import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { API } from "../utils.js/constants";
import { useEffect } from "react";

const AppLayout = () => {
  const navigate = useNavigate();
  const loggedInUser = useSelector((store) => store.user);

  useEffect(() => {
    if (!loggedInUser) {
      navigate(API.LOGIN);
    }
  }, [loggedInUser, navigate]);

  return (
    <div className="min-h-screen bg-transparent flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
