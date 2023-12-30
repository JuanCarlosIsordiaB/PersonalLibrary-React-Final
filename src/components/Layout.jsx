import { NavBar } from "./NavBar"

export const Layout = ({ children }) => {
  return (
    <div >
      <NavBar />
      <div className="content-container">
        {children}
      </div>
    </div>
  );
};
