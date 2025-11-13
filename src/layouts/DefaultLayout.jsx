import { Outlet } from "react-router";
import Navigation from "../components/Navigation";

const DefaultLayout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};
export default DefaultLayout;
