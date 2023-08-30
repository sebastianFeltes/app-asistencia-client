import { Outlet } from "react-router-dom";
import "./Layout.scss";
import NavBar from "./NavBar";

export function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
