import { Outlet } from "react-router";
import Navigation from "../components/Navigation";

const DefaultLayout = () => {
  <>
    <Navigation />
    <Outlet />
  </>;
};
export default DefaultLayout;
