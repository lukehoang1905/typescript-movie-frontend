import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const PublicLayout = () => {
  return (
    <div>
      <Header />
      PublicLayout
      <Outlet />
    </div>
  );
};

export default PublicLayout;
